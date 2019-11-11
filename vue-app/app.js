 const languagesUrl = 'http://localhost:8000/language';
 
 const keyUrl = 'http://localhost:8000/key';
 const sentimentUrl = 'http://localhost:8000/sentiment';


 const languages = {
   'documents': [{
       'id': '1',
       'text': 'This is a document written in English.'
     },
     {
       'id': '2',
       'text': 'Este es un document escrito en Español.'
     },
     {
       'id': '3',
       'text': '这是一个用中文写的文件'
     }
   ]
 }

 const keywords = {
   'documents': [{
       'id': '1',
       'language': 'en',
       'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.'
     },
     {
       'id': '2',
       'language': 'es',
       'text': 'Si usted quiere comunicarse con Carlos, usted debe de llamarlo a su telefono movil. Carlos es muy responsable, pero necesita recibir una notificacion si hay algun problema.'
     },
     {
       'id': '3',
       'language': 'en',
       'text': 'The Grand Hotel is a new hotel in the center of Seattle. It earned 5 stars in my review, and has the classiest decor I\'ve ever seen.'
     }
   ]
 };
 

const Languages  = Vue.component('languages', {
  template: `
    <div>
        <h2>Detect {{title}}</h2>
        <div>
          <textarea disabled cols="70" rows="20">{{data}}</textarea>
        </div>
        <div>
          <button @click="detectLanguages">{{title}}</button>
        </div>
        <div>
          <textarea name="" id="" cols="70" rows="40">{{languagesResult}}</textarea>
        </div>
    </div>
  `,
  data() {
      return {
        languages: languages,
        languagesResult: ''
      }
    },
    methods: {
      async detectLanguages() {
        const res = await fetch(this.url);
        this.languagesResult = await res.json();
      }
    },
    props: ['url', 'title', 'data']
  /* ... */
})

const Default = Vue.component('default', {
  template: '<div>Default</div>'
})


 const routes = [
  {
    path: '/',
    component: Default
  }, 
  {
     path: '/languages',
     component: Languages,
     props: { title: 'Detect languages', url: languagesUrl, data: languages }
   },
   {
     path: '/keyword',
     component: Languages,
       props: {
         title: 'Detect keywords',
         url: keyUrl,
         data: keywords
       }
   },
   {
     path: '/sentiment',
     component: Languages,
       props: {
         title: 'Detect sentiment',
         url: sentimentUrl,
         data: keywords
       }
   }
 ]

 const router = new VueRouter({
   routes // short for `routes: routes`
 })

 const app = new Vue({
   router,
   el: '#app',
   data() {
     return {
       items: [{
           url: '/languages',
           text: 'detect languages'
         },
         {
           text: 'detect keywords',
           url: '/keyword'
         }, {
           url: '/sentiment',
           text: 'sentiment'
         }
       ]
     }
   }
 })