<template>
	<v-data-table ref="mediasTable"
   :headers="headers" v-show="medias && medias.length"
   :items="medias" hide-actions
   >
      <template slot="headerCell" slot-scope="{ header }">
         <span class="subheading font-weight-light text-success text--darken-3 cn">
            {{ header.text }}
         </span>
      </template>
      <template slot="items" slot-scope="props">
			<tr class="sortableRow" :key="itemKey(props.item)">
				<td class="px-1 text-md-center">
					<a v-if="!editting" href="#" icon style="cursor: move" class="sortHandle">
						<v-icon color="info">mdi-drag</v-icon>
					</a>
				</td>
				<td v-if="props.item.id" >
					<v-img max-width="200" :src="props.item.previewPath" />
				</td>
				<td v-else>
					<v-img v-if="props.item.thumb" max-width="200" :src="props.item.thumb" />
				</td>
				
				<td v-if="edittingIndex == props.index">
					<v-text-field v-model="edittingMedia.title" label="標題" name="title" />	
				</td>
				<td v-else>
					{{  props.item.title }}		
				</td>

				<td>{{ props.item.type }}</td>
				<td v-if="edittingIndex == props.index" class="px-1 text-md-center">
					<a href="#" @click.prevent="save(props.item,props.index)" icon>
						<v-icon small color="success">mdi-content-save</v-icon>
					</a>
					<a href="#" class="ml-3" @click.prevent="cancelEditMedia" icon>
						<v-icon small>mdi-undo</v-icon>
					</a>
				</td>
				<td v-else class="px-1 text-md-center">
					<v-tooltip top  content-class="top">
						<a href="#" @click.prevent="editMedia(props.item,props.index)"  slot="activator" icon>
							<v-icon small color="success">mdi-pencil</v-icon>
						</a>
						<span class="cn">編輯</span>
					</v-tooltip>

					<v-tooltip top class="ml-3" content-class="top">
						<a href="#" @click.prevent="deleteMedia(props.item,props.index)"  slot="activator" icon>
							<v-icon small color="error">mdi-delete</v-icon>
						</a>
						<span class="cn">刪除</span>
					</v-tooltip>
				</td>
			</tr>
      </template>
   </v-data-table>
</template>

<script>

import * as Sortable from "sortablejs";

export default {
   name:'MediaList',
      props:{
         medias:{
            type: Array,
            default: null
         }			
		},
      data(){
         return {
            title:'新增圖片/影片',
				edittingIndex: -1,

				edittingMedia: {},

				deleteConfirm:{
					id:0,
               showing:false,
               message:''
				},
				
				itemKeys: new WeakMap(),
				currentItemKey: 0,
            headers: [
					{
						sortable: false,
						text: '',
						value: 'sort',
						width: '7%'
					},
					{
						sortable: false,
						text: '',
						value: 'sort',
						width: '35%'
					},
					{
						sortable: false,
						text: '標題',
						value: 'title',
						width: '35%'
					},
					{
						sortable: false,
						text: '檔案類型',
						value: 'type'
					},
					{
						sortable: false,
						text: '',
						value: '',
						width: '15%'
					}
				],
			
         }
      },
      computed:{
			editting(){
				return this.edittingIndex >= 0;
			}
		},
		mounted(){
			this.init();
		},
      methods:{
			init(){
				new Sortable(
					this.$refs.mediasTable.$el.getElementsByTagName('tbody')[0],
					{
						draggable: '.sortableRow',
						handle: '.sortHandle',
						onEnd: this.onDragEnd
					}
				);
			},
			itemKey(item){
				if (!this.itemKeys.has(item)) this.itemKeys.set(item, ++this.currentItemKey)
				return this.itemKeys.get(item)
			},
			onDragEnd ({ oldIndex, newIndex }) {
				this.$emit('drag-end', { oldIndex, newIndex });
			},
			setMedias(attachments){
				return new Promise((resolve, reject) => {
					attachments.forEach((attachment) => {
						let media=this.medias.find(item=>{
							return item.name==attachment.name;
						});
						if(media){
							media.path=attachment.path;
						}else{
							reject();
						}
					});
					resolve(true);

				})
				
			},
			onRemoveMedia(media){
				
				if(media.id){
				
					this.deleteConfirm.id=media.id;
					this.deleteConfirm.message=`確定要刪除圖片 ${media.title} 嗎?`;
					this.deleteConfirm.showing=true;
				}else{
				
					this.removeMedia(media);
					this.$refs.fileUpload.removeFile(media.name);
				}
			},
			removeMedia(media){
				
				let index=this.findFileIndex(media.name);
				
				if(index< 0) return;

				this.medias.splice(index, 1);
				
			},
			deleteMedia(item, index){
				let deleteMedia=Attachment.remove(this.deleteConfirm.id);
				deleteMedia.then(() => {
					this.deleteConfirm.showing=false;

					let index=this.findFileIndex(null,this.deleteConfirm.id);
					if(index< 0) return;
					this.medias.splice(index, 1);
				})
				.catch(error => {
					Helper.BusEmitError(error,'刪除失敗');
				})
				
			},
			editMedia(media, index){
				
				this.edittingIndex = index;
				this.edittingMedia = {
					title: media.title
				};
				console.log(this.edittingIndex);
			},
			cancelEditMedia(){
				this.edittingIndex = -1;
				this.edittingMedia = {
					title:''
				};
			},
			updateMedia(index){
				let media = this.medias[index];
				media.title = this.edittingMedia.title;

				this.edittingIndex = -1;
				this.edittingMedia = {
					title:''
				};
			}
			
      }
}
</script>

