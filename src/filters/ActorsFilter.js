import Vue from 'vue'

Vue.filter('actorsfilter', (data)=>{  //data是前面的值传过来的主演数组。不需导出，只要代码执行了，就有效果
    // console.log(data);
    //有些没有主演，是undefined，
    if(!data){
        return '暂无主演';
    }
    var result = data.map(item=>item.name);
    // console.log(result);
    return result.join(" ");
})