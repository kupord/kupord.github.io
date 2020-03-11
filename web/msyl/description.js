function iOSVersion() {
    var match = (navigator.appVersion).split('OS ');
    if (match.length > 1) {
        return match[1].split(' ')[0].split('_').join('.');
    }
    return false;
}
$(function() {
  $("li").on("click",function() {
             if(this.id=="dnt") {
             $("#dnt_txt").html("You can donate USD via PayPal mail: julioverne"+"@"+"icloud.com");
             }
             });
  });
function loadPackageInfo() {
    if (navigator.userAgent.search(/Cydia/) == -1) {
        $("#showAddRepo_").show();
        $("#showAddRepoUrl_").show();
    }
    var urlSelfParts = window.location.href.split('description.html?id=');
    var form_url = urlSelfParts[0]+"msxq/"+urlSelfParts[1];
    $.ajax({
           url: form_url,
           type: "GET",
           cache: false,
           crossDomain: true,
           success: function (returnhtml) {
           $("#tweakStatusInfo").hide();
           var decodeResp = eval('('+returnhtml+')');
           if(decodeResp.name) {
           document.title = decodeResp.name;
           $("#name").html(decodeResp.name);
           $("#name").show();
           }
           if(decodeResp.desc_short) {
           $("#desc_short").html(decodeResp.desc_short);
           $("#desc_short_").show();
           }
           if(decodeResp.desc_version) {
           $("#version").html(decodeResp.desc_version);
           $("#version_").show();
           }
           if(decodeResp.warning) {
           $("#warning").html(decodeResp.warning);
           $("#warning_").show();
           }
           if(decodeResp.desc_version) {
           $("#desc_version").html(decodeResp.desc_version);
           $("#desc_version_").show();
           }
           if(decodeResp.compatitle) {
           $("#compatitle").html(decodeResp.compatitle);
           $("#compatitle_").show();
           var ios_ver = iOSVersion();
           if(ios_ver) {
           $("#your_ios").show();
           $("#your_ios").html("本机系统:"+ios_ver);
           }
           }
           if(decodeResp.changelog) {
           $("#changelog").html(decodeResp.changelog);
           $("#changelog_").show();
           }
           if(decodeResp.ksbb) {
           $("#ksbb").html(decodeResp.ksbb);
           $("#ksbb_").show();
           }
           if(decodeResp.jsbb) {
           $("#jsbb").html(decodeResp.ksbb);
           $("#jsbb_").show();
           }
           if(decodeResp.screenshot) {
           $("#screenshot").html(decodeResp.screenshot);
           $("#screenshot_").show();
           }
           if(decodeResp.open == true) {
           $("#is_open_source_").show();
           }
           
           },
           error: function (err) {
           $("#errorInfo").html("<strong>请联系管理员上传描述文件</strong><br>缺少相关文件<br>"+urlSelfParts[1]);
           }
           });
}
function loadRecentUpdates() {
    var form_url = window.location.protocol+"//"+window.location.hostname+"/last.updates";
    $.ajax({
           url: form_url,
           type: "GET",
           cache: false,
           crossDomain: true,
           success: function (returnhtml) {
           var decodeResp = eval('('+returnhtml+')');
           var htmlnews = "";
           for (var dicNow in decodeResp) {
           var urlOpen = "cydia://package/"+decodeResp[dicNow].package;
           if (navigator.userAgent.search(/Cydia/) == -1) {
           urlOpen = window.location.protocol+"//"+window.location.hostname+"/description.html?id="+decodeResp[dicNow].package;
           }
           htmlnews +=  "<li><a href='"+urlOpen+"' target='_blank'><img class='icon' src='tweak.png'/><label>"+decodeResp[dicNow].name+" v"+decodeResp[dicNow].version+"</label></a></li>";
           }
           $("#updates").html(htmlnews);
           $("#updates_").show();
           },
           error: function (err) {
           $("#updates_").hide();
           }
           });
}
function runTime() {
    var d = new Date(), str = '';
    BirthDay = new Date("May 1,2019");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    msPerYear = 365 * 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    e_yearsold = timeold / msPerYear
    daysold = Math.floor(e_daysold);
    yearsold = Math.floor(e_yearsold);
    str += daysold + "天";
    str += d.getHours() + '时';
    str += d.getMinutes() + '分';
    str += d.getSeconds() + '秒';
    return str;
}
