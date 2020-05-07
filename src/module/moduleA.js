function mapState(){
    console.log('1111111111');
}

function mapFilter(){
    console.log('222222222222');
}

var obj = {
    mapState,
    mapFilter
}

export default obj  //只能有一个export default。要导出两个函数，可用一个对象
// export default mapFilter