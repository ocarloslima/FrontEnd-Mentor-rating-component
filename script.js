let $button = document.querySelector('#button');
let $main = document.querySelectorAll('main');
let $list = document.getElementsByClassName('rate');
let $rateNum = document.querySelector('#rateNum');

let getId = () => {
    for(i=0;i<$list.length;i++){
        if($list[i].checked){
            return $list[i].id;
        }
    }
    return null;
}


$button.addEventListener('click', () => {
    if(!getId()){
        return;
    }
    $main[0].style.display = 'none';
    $rateNum.innerHTML = getId()
    $main[1].style.display = 'flex';

    console.log(getId());
});