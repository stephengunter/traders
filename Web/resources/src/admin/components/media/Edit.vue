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
      postType:{
         type: String,
         default: ''
      },
      model:{
         type: Object,
         default: null
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
						id: 0,
						order: 0,
						title: name.split('.')[0],
						name: name,
						thumb: thumbs[i].data,
						type: thumbs[i].type,
						path:''
					};
					this.medias.push(media);
				}
			}
      },
      onDragEnd({ oldIndex, newIndex }){
         const movedItem = this.medias.splice(oldIndex, 1)[0];
         this.medias.splice(newIndex, 0, movedItem);
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
         let copyMedias = [];
         for (let i = 0; i < this.medias.length; i++) {
            copyMedias.push({...this.medias[i] , thumb:'', order: i });
         }
         return copyMedias;
      },
      onRemoveMedia(media, index){
         this.medias.splice(index, 1);
         if(!media.id){
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
            if(!files.length){
               resolve(true);
            }else{
               let model = {
                  postType: this.postType,
                  postId:this.model.id,
                  files
               };

               this.$store.dispatch(STORE_ATTACHMENT, model)
                  .then(() => {
                     resolve(true);
                  })
                  .catch(error => {
                     reject(error);
                  })
            }

         })         
      }
   }
}
</script>

