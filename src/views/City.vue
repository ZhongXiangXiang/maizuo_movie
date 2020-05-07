<template>
    <div>
        <mt-index-list :style="{height: cityheight}">
            <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
                <div  @click="handleClick()">
                    <mt-cell :title="item.name" v-for="item in data.city" :key="item.cityId"></mt-cell>
                </div>
                
                
            </mt-index-section>
            
        </mt-index-list>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            cityheight: 0,
            datalist:[]
        }
    },
    mounted(){
        this.cityheight = document.documentElement.clientHeight - 50 + 'px';

        axios({
            url: 'https://m.maizuo.com/gateway?k=6244937',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055","bc":"210200"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            console.log(res.data);

            this.datalist = this.handleCityArr(res.data.data.cities);
        })
    },

    methods:{
        //a.charCodeAt() ->65。 String.fromCharCode(65) ->'A'
        handleCityArr(list){
            var arr = [];
            for(var i = 65; i < 91; i++){
                arr.push(String.fromCharCode(i));
            }
            console.log(arr);

            var newlist = [];
            for(var i = 0; i < arr.length; i++){
                var newarr = list.filter(item=>item.pinyin.substring(0,1) === arr[i].toLowerCase());
                // console.log(arr);
                if(newarr.length !== 0){
                    //往newlist中push，push对象
                    newlist.push({
                        index:arr[i],
                        city:newarr
                    })
                }
            }
            console.log(newlist);

            return newlist;
        },
        handleClick(){
            this.$router.push(`/film/nowplaying`);
        }
    }
}
</script>