function mapState(){
    console.log('1111111111');
}

function mapFilter(){
    console.log('222222222222');
}


export {  //去掉default，直接导出一个对象，而这并非对象写法，是一个解构
    mapState,
    mapFilter
}