import '../css/index.less';
import $ from 'jquery';
import { create } from 'domain';

function getGoodList() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/api/goodsList.json',
        success: function (data) {
            createList(data);
            // console.log(data);
        },
        error: function () {
            console.log('error');
        }
    })
}
getGoodList();

function createList(data) {
    var dataList = data.list;
    var str = '';
    console.log(dataList);
    dataList.forEach(function (ele, index) {
        str += `<a href="http://localhost:8080/goodsInfo.html?id=${ele.id}">
        <div class="goods_item">
            <img src="${ele.imgurl[0]}" >
            <p class="item_name">${ele.name}</p>
            <p class="item_price">￥${ele.spectList[0].price}</p>
        </div>
    </a>`;
    })
    $('.tab_content').html(str);
}