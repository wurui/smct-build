define(['zepto', './carjson'], function (undef, CarList) {
    var settings = {
        tpl: 1,
        bgcolor: 1,
        // color1:1
        text1: $('#text1input').val(),
        text2: $('#text2input').val()
    };
    var $carlist;
    var unshownList = [];
    var renderNextScroll = function () {//10 by 10
        var el = $carlist[0],
            sl = el.scrollLeft,
            w = el.clientWidth,
            sw = el.scrollWidth;
        if(sw-2*w-sl<0){

            var l = Math.min(10,unshownList.length);
            var html='';
            while (l--) {
                var n = unshownList.shift();

                html += '<label class="carlogo"><img title="' + n + '" src="' + carlogoPath(n) + '" width="50"/><br/>' +
                    '<input type="radio" name="carlogo" ' + (settings.carlogo == n ? 'checked="checked"' : '') + ' value="' + n + '"/></label>'

            }
            $carlist.append(html);
        }else{
            //console.log('1111')
        }
        //console.log($carlist[0].clientWidth, $carlist[0].scrollWidth, sl)
    };
    var carlogoPath = function (name) {
        return 'http://www.shaomachetie.com/static/smct/img/carlogo/' + name + '.jpg';
    };
    var renderCarList = function (searchKey) {
        var searchKey = searchKey || '';
        var html = '';

        var list = CarList;
        var i = 0;
        var firstScreenCount=20;
        unshownList=[];
        while (i < list.length) {
            var n = list[i++];
            if (searchKey && n.indexOf(searchKey) == -1) {
                continue
            }
            if(firstScreenCount){
                firstScreenCount--;
                html += '<label class="carlogo"><img title="' + n + '" src="' + carlogoPath(n) + '" width="50"/><br/>' +
                    '<input type="radio" name="carlogo" ' + (settings.carlogo == n ? 'checked="checked"' : '') + ' value="' + n + '"/></label>'
            }else{
                unshownList.push(n);
            }

        }
        if (html && !searchKey) {
            html = '<label class="carlogo">不使用<br/>车标<br/><input type="radio" ' + (!settings.carlogo ? 'checked="checked"' : '') + ' name="carlogo" value=""/></label>' + html
        }
        $carlist.html(html || '无结果')[0].scrollLeft=0;
    };
    var initColor = function ($node) {

        var s = '', i = 0;
        while (i < 12) {
            i++;
            s += '<label class="bgcolor bgcolor-' + i + '"><input type="radio"' + (i == 1 ? 'checked="checked"' : '') + ' name="bgcolor" value="' + i + '"/></label>'
        }
        $node.html(s)

    }
    return {
        init: function ($mod) {


            var $toolbar = $('.J_toolbar', $mod).on('change', function (e) {
                var tar = e.target;
                var name = tar.name,
                    val = tar.value;

                //console.log(name,val);
                switch (name) {
                    case 'tpl':
                        $('#TPL').removeClass('tpl-' + settings.tpl).addClass('tpl-' + val)
                        settings.tpl = val;
                        break
                    case 'bgcolor':
                        $('#preview').removeClass('bgcolor-' + settings.bgcolor).addClass('bgcolor-' + val)
                        settings.bgcolor = val;
                        break
                    case 'color1':
                        $('#mainText').css('color', $(tar).closest('label').css('backgroundColor'))
                        settings.color1 = val;
                        break
                    case 'text1':

                        $('#text1').html(tar.value)
                        settings.text1 = val;
                        break
                    case 'text2':
                        $('#text2').html(tar.value)
                        settings.text2 = val;
                        break
                    case 'carlogo':
                        $('#central').html(val ? '<img src="' + carlogoPath(val) + '"/>' : '');
                        settings.carlogo = val;
                        break
                    case 'carkey':
                        renderCarList(val)
                        break
                }

            }).on('tap', '[data-switch]', function (e) {

                //var toolbar=document.getElementById('toolbar');
                var type = e.target.getAttribute('data-switch');
                $toolbar.attr('data-on', type);
                location.href = '#toolbar'

            });

            var TO;
            $carlist = $('.J_carlist', $toolbar).on('scroll', function () {
                if (TO)clearTimeout(TO);
                TO = setTimeout(renderNextScroll, 100)
            });

            $($mod).on('submit',function(e){
                var f= e.target;

                for(var k in settings){
                    var hid=document.createElement('input');
                    hid.type='hidden';
                    hid.name=k;
                    hid.value=settings[k];
                    f.appendChild(hid)
                }
                return true;



            });





            initColor($('.J_Colors', $mod))
            renderCarList();


        }
    }
})


/**
 * Created by wurui on 01/04/2017.
 */



