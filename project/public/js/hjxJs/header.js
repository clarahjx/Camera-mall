var oIpt=document.getElementById('iPt');
var oS=document.getElementById('serch');
var flag=0;
oS.onclick=function () {
    if (flag==0) {
        oIpt.style.display='block';
        flag=1;
    }else{
        oIpt.style.display='none';
        flag=0;
    }
};
