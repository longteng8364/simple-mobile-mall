import '../css/goodsCover.less';
import $ from 'jquery';
var state = {
    num: 1,
    selected: false
}

function bindEvent(){
    $('.buy_spect_wrap ul').on('click','.buy_spect_li',function(){
        state.selected = true;
        $('.buy_spect_li').removeClass('active');
        $(this).addClass('active');
        $('.price_value').html($(this).attr('data-price'));
        state.num = 1;
        $('.buy_number_value').html(state.num);
    })

    $('.buy_number_decrease').on('click', function(){
        if(state.num >1){
            $('.buy_number_value').html(--state.num);
        }
    })

    $('.buy_number_add').on('click', function(){
            $('.buy_number_value').html(++state.num);
    })

    $('.buy_ok').on('click', function(){
        if(state.selected){
            $('.buy_wrap').css('display', 'none');
            alert('提交成功');
            state.num = 1;
            state.selected = false;
            $('.buy_spect_li').removeClass('active');
        }else{
            alert('请选择规格');
        }
    })
}

bindEvent();