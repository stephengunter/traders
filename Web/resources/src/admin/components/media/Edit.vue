<template>
   <v-layout wrap>
      <v-flex xs12 class="text-lg-right">
         <FileUpload ref="fileUpload" :title="title"
            :exclude="existFileNames" @file-added="onFileAdded"
         />
      </v-flex>
         <v-flex xs12 >
         <MediaList :medias="medias" @drag-end="onDragEnd"
         @delete="onRemoveMedia" />
      </v-flex>
      <v-dialog v-model="deleting" width="480px">
         <Confirm @ok="submitDelete" @cancel="cancelDelete" />
      </v-dialog>
   </v-layout>
</template>


<script>
import { STORE_ATTACHMENT, DELETE_ATTACHMENT } from '../../store/actions.type';

import FileUpload from '../FileUpload';
import MediaList from './List';
import Confirm from '@/components/Confirm';

export default {
   name:'MediaEdit',
   props: {
      model:{
         type:Object,
         default:null
      }			
   },
   components: {
		FileUpload,
      MediaList,
      Confirm
	},
   data(){
      return {
         title:'新增圖片',
         medias: [],

         deleting: false,

         deleteConfirm:{
            id:0,
            showing:false,
            message:''
         },
      
      }
   },
   computed: {
		existFileNames(){
			return this.medias.map(item => item.name);
		}
   },
   beforeMount() {
      this.init();
   }, 
   methods:{
      init(){
         if(!this.model) return;
         if(this.model.medias){
            this.medias = this.model.medias.slice(0);
         }
      },
      onFileAdded(){
         let thumbs = this.$refs.fileUpload.getThunbnails();
			for (let i = 0; i < thumbs.length; i++) {
				let name = thumbs[i].name;
				if(!this.fileExist(name)){
					let media = {
						id:0,
						order: this.findMinOrder() + 1,
						title: name.split('.')[0],
						name: name,
						thumb: thumbs[i].data,
						type: thumbs[i].type,
						path:''
					};
					this.addMedia(media);
				}
			}
      },
      addMedia(media){
			this.medias.push(media);
			this.sortMedias();
      },
      onDragEnd({ oldIndex, newIndex }){
         const movedItem = this.medias.splice(oldIndex, 1)[0];
         this.medias.splice(newIndex, 0, movedItem);
      },
      sortMedias(){
         this.medias.sort((a, b)=>{
            return a.order - b.order;
         })
      },
      fileExist(name){
         let index = this.findFileIndex(name);
         return index >= 0;
      },
      findFileIndex(name, id ){
         if(id){
            let indexById = this.medias.findIndex(item => item.id === id);
            return indexById;
         }else{
            let index = this.medias.findIndex(item =>  item.name === name);
            return index;
         }
      },
      getMedias(){
         let copyMedias = this.medias.map(media => {
            return {...media , thumb:''};
         });
         return copyMedias;
      },
      onRemoveMedia(media, index){
         if(media.id){
            
         }else{
            this.medias.splice(index, 1);
            this.$refs.fileUpload.removeFile(media.name);
         }
      },
      cancelDelete(){
         this.deleting = false;
      },
      submitDelete(){

      },
      submit(){
         return new Promise((resolve, reject) => {
            const files = this.$refs.fileUpload.getFiles();
            console.log('files', files);

            if(!files.length){
               resolve(true);
            }else{
               this.$store.dispatch(STORE_ATTACHMENT, { postId:this.model.id, files })
                  .then(() => {
                     resolve(true);
                  })
                  .catch(error => {
                     reject(error);
                  })

            }

         })
         
      },
      findMinOrder(){
         if(!this.medias.length) return 0;

         let arr = this.medias;
         let min = arr[0].order;
         for (let i = 1, len = arr.length; i < len; i++) {
            let v = arr[i].order;
            min = (v < min) ? v : min;         
         }
         return min;
      }
   }
}
</script>

