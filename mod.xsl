<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.smct-build">
        <xsl:param name="actionShopcart">http://www./smct/submitbuild</xsl:param>
        <xsl:param name="actionWorks">/smct/submitbuild</xsl:param>
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-smct-build" ox-mod="smct-build">

            <a name="toolbar"></a>
            <section class="toolbar J_toolbar" data-on="1">
                <dl>
                    <dt>选择背景颜色</dt>
                    <dd class="tpl-list J_Colors">
                        颜色加载中...
                    </dd>
                </dl>
                <dl>
                    <dt>选择车标&#160;&#160;&#160;&#160;
                        <input type="search" name="carkey" placeholder="筛选条件,如:宝马"/>
                    </dt>
                    <dd class="tpl-list">

                        <div class="carlist J_carlist"></div>

                    </dd>
                </dl>
                <dl>
                    <dt>文案编辑</dt>
                    <dd class="tpl-list">
                        <datalist id="text1option">
                            <option>扫码移车</option>
                            <option>扫码挪车</option>
                            <option>扫码通知车主</option>
                            <option>有事请扫码</option>
                        </datalist>
                        <datalist id="text2option">
                            <option>www.shaomachetie.com</option>
                            <option>杭州声罄科技有限公司出品</option>
                        </datalist>

                        头部文案:
                        <input type="text" id="text1input" name="text1" size="30" autocomplete="off" value="扫码通知车主"
                               list="text1option"
                               maxlength="6" placeholder="扫码通知车主"/>
                        <br/>
                        <br/>
                        底部文案:
                        <input type="text" id="text2input" name="text2" size="30" list="text2option"
                               value="www.shaomachetie.com"
                               maxlength="30" placeholder="www.shaomachetie.com"/>
                    </dd>
                </dl>
                <div class="switches">
                    <!-- <button type="button" onclick="showToolbar(1)">选择模版</button> -->
                    <button type="button" data-switch="1">背景颜色</button>
                    <button type="button" data-switch="2">车标</button>
                    <button type="button" data-switch="3">文案</button>
                </div>
            </section>

            <section>

                <h3 class="title">效果预览</h3>

                <div class="preview bgcolor-1" id="preview">
                    <div id="text1" class="card-header">扫码通知车主</div>
                    <div id="TPL" class="card-body tpl tpl-1">
                        <div class="central" id="central"></div>
                        <img src="http://i.oxm1.cc/uploads/git/wurui/img/2ahkwkkveTj1rgh0ueRlcquA5vz-1000.png"
                             class="qrcode" width="120"/>
                    </div>
                    <div class="card-footer">
                        <span id="text2">www.shaomachetie.com</span>
                    </div>

                </div>

                <div class="buttons">
                    <form method="post" action="{$actionShopcart}">
                        <button type="submit" class="bt-main">我很满意,提交!</button>

                        <button type="submit" onclick="this.form.action='{$actionWorks}'" class="bt-second">保存至我的车贴</button>
                    </form>
                </div>


            </section>
        </div>
    </xsl:template>
</xsl:stylesheet>
