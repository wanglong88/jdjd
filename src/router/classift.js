import Classify from '@/components/classify'
import Search from '@/components/classify/search/search.vue'
// import Search1 from '@/components/classify/search/search1.vue'
export default [
    {
        path:'/classify',
        name:'classify',
        component:Classify
        
    },
    {
        
        path:'/classify/search',
        name:'search',
        component:Search,
        // children:[
        //     {
        //         path:"/classify/search/search1",
        //         name:'search1',
        //         component:Search1
        //     }
        // ]  
        
    }
]