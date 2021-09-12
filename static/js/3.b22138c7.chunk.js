(this["webpackJsonpliliana-player-v2"]=this["webpackJsonpliliana-player-v2"]||[]).push([[3],{103:function(A,e,t){"use strict";t.r(e);var a=t(13),g=t(14),n=t(25),l=t(27),i=t(26),r=t(0),C=t.n(r),s=t(2),I=t(23),o=t(17),c={getAllSongs:function(A){return o.a.get("/api/song/all",{params:A})},getLyric:function(A){return o.a.get("/api/lyric?file="+A)}},m=t(93),u=t.n(m),d=t(94),p=t.n(d),h=(t(91),function(A){Object(l.a)(t,A);var e=Object(i.a)(t);function t(A){var a;return Object(g.a)(this,t),(a=e.call(this,A)).onChange=function(A){var e=A.target.value,t=a.props.maxLength?a.props.maxLength:200,g="";e.length>t?g="Max length of search text is: "+t:a.regexValidation(e)||(g=a.props.regexErrorMsg?a.props.regexErrorMsg:"Search text is invalid"),a.setState({value:e,errorMsg:g})},a.onKeyUp=function(A,e){13===A.keyCode&&a.onSearch(e)},a.onSearch=function(){var A=a.state.value;a.props.onSearch({name:a.props.name,value:A})},a.onClear=function(){a.setState({value:""}),a.props.onSearch({name:a.props.name,value:null})},a.regexValidation=function(A){var e=a.props.regex?a.props.regex:"";return""===A||""===e||A.match(e)},a.state={value:"",errorMsg:"",invalid:!1,focus:!1},a}return Object(n.a)(t,[{key:"render",value:function(){var A=this.props,e=A.name,t=A.label,a=A.disabled,g=void 0!==a&&a,n=A.isRequire,l=void 0!==n&&n,i=A.type,r=void 0===i?"text":i,s=A.placeholder,I=void 0===s?"Search...":s,o=this.state,c=o.value,m=o.errorMsg;return C.a.createElement("div",{className:"input-wrapper"},t&&C.a.createElement("label",{className:"input-label"},t,l&&C.a.createElement("span",{className:"input-require"},"\xa0*")),C.a.createElement("div",{className:"input-search-wrapper"},C.a.createElement("i",{className:"fas fa-search input-icon-search",onClick:this.onSearch}),C.a.createElement("input",{type:r,name:e,value:c,disabled:g,onChange:this.onChange,className:"input-text input-text-seach "+(m?" input-error":""),placeholder:I,onKeyUp:this.onKeyUp}),C.a.createElement("i",{className:"fas fa-times input-icon-clear",onClick:this.onClear}),!!m&&C.a.createElement("div",{className:"input-error-msg"},m)))}}]),t}(r.PureComponent)),f=t(95),v=t.n(f),y=function(A){return C.a.createElement("div",{id:"all_songs"},C.a.createElement("div",{className:"search-wrapper"},C.a.createElement(h,{name:"searchText",onSearch:A.onSearch})),C.a.createElement("div",{className:"all-song-value custom-scrollbar"},C.a.createElement("table",{className:"table_striped",id:"songTable",cellSpacing:"0",cellPadding:"0"},C.a.createElement("thead",null,C.a.createElement("tr",null,C.a.createElement("th",{style:{textAlign:"right"}},"No."),C.a.createElement("th",{style:{cursor:"pointer",minWidth:"220px"},onClick:function(){return A.getAllSongs({sortBy:"title",sortOrder:"ASC"})}},"Song"),C.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return A.getAllSongs({sortBy:"listens",sortOrder:"DESC"})}},"Listens"),C.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return A.getAllSongs({sortBy:"type",sortOrder:"ASC"})}},"Type"),C.a.createElement("th",{style:{cursor:"pointer"},onClick:function(){return A.getAllSongs({sortBy:"createdDate",sortOrder:"DESC"})}},"Date"))),C.a.createElement("tbody",null,A.songData.map((function(e,t){var a=e.imageUrl?"https://ducdongyyen.com/laravel/public"+e.imageUrl:v.a;return C.a.createElement("tr",{key:t+1},C.a.createElement("td",null,t+1),C.a.createElement("td",{className:"td-song-info"},C.a.createElement("img",{className:"song-picture",src:a,alt:e.artist+" - "+e.title}),C.a.createElement("a",{className:"song-item",href:"#/bai-hat/"+e.path,onClick:function(){return A.playSong(e)}},C.a.createElement("div",{className:"song-title"},e.title),C.a.createElement("div",{className:"song-artist"},e.artist)),C.a.createElement("i",{className:"icon-play"})),C.a.createElement("td",null,e.listens),C.a.createElement("td",null,e.type),C.a.createElement("td",null,e.formatCreatedDate))}))))))};function E(A){return document.getElementsByClassName(A)[0]}function b(A){return parseFloat(A.toFixed(3))}function K(A){return A&&"string"===typeof A?(e=A.match(/\[(\d+):(\d+):(\d+\.\d+)\]/))&&4===e.length?parseFloat((60*parseInt(e[1])*60+60*parseInt(e[2])+parseFloat(e[3])).toFixed(3)):(e=A.match(/\[(\d+):(\d+\.\d+)\]/))&&3===e.length?parseFloat((60*parseInt(e[1])+parseFloat(e[2])).toFixed(3)):0:0;var e}function N(A,e,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,g=document.createElement(A);if(null!=e&&"string"===typeof e&&""!=e&&g.setAttribute("id",e),null!=t&&"string"===typeof t&&""!=t&&g.setAttribute("class",t),null!=a&&"object"===typeof a)for(var n=0;n<Object.keys(a).length;n++)g.setAttribute(Object.keys(a)[n],a[Object.keys(a)[n]]);return g}var w=t(7),F=(t(96),function(A){Object(l.a)(t,A);var e=Object(i.a)(t);function t(A){var a;return Object(g.a)(this,t),(a=e.call(this,A)).secsToMins=function(A){var e=Math.floor(A);return Math.floor(e/60)+":"+("0"+e%60).slice(-2)},a.getCurrentTime=function(){var A=a.secsToMins(a.myAudio.currentTime),e=a.myAudio.currentTime/a.myAudio.duration*100;a.currentTime.innerText=A,a.progressBar.style.width=e+"%",a.ll_player.classList.contains("ll-playing")?a.showCurrentTime=requestAnimationFrame(a.getCurrentTime):cancelAnimationFrame(a.showCurrentTime)},a.updateProgressBar=function(A){var e=a.progressWrapper.offsetWidth,t=A.nativeEvent.offsetX/e;(a.mouseDown||"click"===A.type)&&(a.myAudio.currentTime=a.myAudio.duration*t,a.ll_player.classList.contains("ll-paused")&&a.getCurrentTime())},a.playAudio=function(){a.myAudio.play(),a.ll_player.classList.remove("ll-paused"),a.ll_player.classList.add("ll-playing"),E("ll-play-pause").setAttribute("title","Pause"),a.getCurrentTime()},a.pauseAudio=function(){a.myAudio.pause(),a.ll_player.classList.remove("ll-playing"),a.ll_player.classList.add("ll-paused"),E("ll-play-pause").setAttribute("title","Play")},a}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var A,e=this;this.myAudio=(A="myAudio",document.getElementById(A)),this.currentTime=E("current-time"),this.progressWrapper=E("progress"),this.progressBar=this.progressWrapper.childNodes[0],this.ll_player=E("ll_player"),this.mouseDown=!1,this.showCurrentTime=null,this.myAudio.onloadedmetadata=function(){var A=e.secsToMins(e.myAudio.duration);E("duration").innerText=A},this.ll_player.onmousedown=function(){e.mouseDown=!0},this.ll_player.onmouseup=function(){e.mouseDown=!1},E("ll-play-pause").onclick=function(){e.ll_player.classList.contains("ll-paused")?e.playAudio():e.ll_player.classList.contains("ll-playing")&&e.pauseAudio()},E("ll-btn-prev").onclick=this.prevSong,E("ll-btn-next").onclick=this.nextSong,E("ll-shuffle").onclick=function(){var A=E("ll-shuffle");A.classList.contains("active")?(A.classList.remove("active"),A.setAttribute("title","Shuffle"),A.setPlayType(w.g)):(A.classList.add("active"),A.setAttribute("title","Turn off shuffle"),A.setPlayType(w.h),E("ll-repeat").classList.remove("active"))},E("ll-repeat").onclick=function(){var A=E("ll-repeat");A.classList.contains("active")?(A.classList.remove("active"),A.setAttribute("title","Repeat one"),A.setPlayType(w.g)):(A.classList.add("active"),A.setAttribute("title","Turn off repeat one"),A.setPlayType(w.e),E("ll-shuffle").classList.remove("active"))}}},{key:"setPlayType",value:function(A){var e=E("ll-shuffle"),t=E("ll-repeat");A||(A=w.g),this.playType=A,A===w.h?(e.classList.add("active"),t.classList.remove("active")):A===w.e?(e.classList.remove("active"),t.classList.add("active")):(e.classList.remove("active"),t.classList.remove("active"))}},{key:"render",value:function(){var A=this,e=this.props.song;return C.a.createElement("div",{className:"ll_player ll-paused"},C.a.createElement("div",{className:"info"},C.a.createElement("div",{id:"song_details"},C.a.createElement("div",{className:"song_title"},e.title),C.a.createElement("div",{className:"song_artist"},e.artist),C.a.createElement("div",{className:"song_album"},"(",e.album?e.album:"No Album",")"))),C.a.createElement("div",{className:"ll-btn-wrapper"},C.a.createElement("button",{className:"ll-shuffle",title:"Shuffle"},C.a.createElement("div",{className:"arrow"}),C.a.createElement("div",{className:"arrow"})),C.a.createElement("button",{className:"ll-button ll-btn-prev",title:"Previous"},C.a.createElement("div",{className:"arrow arrow-transform"}),C.a.createElement("div",{className:"arrow"})),C.a.createElement("button",{className:"ll-button ll-play-pause",title:"Play"},C.a.createElement("div",{className:"arrow arrow-transform"})),C.a.createElement("button",{className:"ll-button ll-btn-next",title:"Next"},C.a.createElement("div",{className:"arrow arrow-transform"}),C.a.createElement("div",{className:"arrow"})),C.a.createElement("button",{className:"ll-repeat",title:"Repeat one"})),C.a.createElement("div",{className:"time"},C.a.createElement("span",{className:"current-time"},"0:00"),C.a.createElement("span",{className:"progress",onClick:this.updateProgressBar,onMouseMove:this.updateProgressBar},C.a.createElement("span",null)),C.a.createElement("span",{className:"duration"},"0:00")),C.a.createElement("audio",{ref:function(e){return A.myAudio=e},id:"myAudio",preload:"none",src:this.props.songURL}))}}]),t}(r.PureComponent)),T=function(A){return C.a.createElement("div",{className:"btn_sync_wrapper"},C.a.createElement("div",{className:"btn_toggle_setting",title:"Settings"},C.a.createElement("i",{className:"fa fa-ellipsis-h"})),C.a.createElement("div",{id:"setting_wrapper",style:{display:"none",textAlign:"right"}},C.a.createElement("div",null,C.a.createElement("span",{className:"setting-legend"},"Lyric:"),C.a.createElement("i",{className:"fas fa-caret-up btn_sync_up",title:"Sync lyric: -100ms"}),C.a.createElement("i",{className:"fas fa-caret-down btn_sync_down",title:"Sync lyric: +100ms"}),C.a.createElement("i",{className:"setting_separator"},"|"),C.a.createElement("i",{className:"fa fa-align-left btn_align btn_align_left",title:"Lyric left alignment"}),C.a.createElement("i",{className:"fa fa-align-center btn_align btn_align_center",title:"Lyric center"}),C.a.createElement("i",{className:"fa fa-align-right btn_align btn_align_right",title:"Lyric right alignment"})),C.a.createElement("div",null,C.a.createElement("span",{className:"setting-legend"},"Theme:"),C.a.createElement("i",{className:"fa fa-square btn_theme btn_theme_dark",title:"Dark theme"}),C.a.createElement("i",{className:"fa fa-square btn_theme btn_theme_light",title:"Light theme"}),C.a.createElement("i",{className:"fa fa-home btn_theme btn_theme_picture_bg",title:"Picture background theme"})),C.a.createElement("div",null,C.a.createElement("span",{className:"setting-legend"},"Mode:"),C.a.createElement("i",{className:"fas fa-microphone-alt btn_theme btn_karaoke_mode",title:"Karaoke mode"}),C.a.createElement("i",{className:"fas fa-smog btn_theme btn_blur_mode",title:"Blur mode"}),C.a.createElement("i",{className:"fas fa-eye-slash btn_theme btn_word_appear",title:"Word appears when time comes to it"}),C.a.createElement("i",{className:"fa fa-search-plus btn_theme btn_gigantic_line",title:"Gigantic line"})),C.a.createElement("div",null,C.a.createElement("span",{className:"setting-legend"},"Speed:"),C.a.createElement("i",{className:"fa fa-plus-square btn_theme btn_increase_speed",title:"Increase speed"}),C.a.createElement("i",{className:"fa fa-minus-square btn_theme btn_decrease_speed",title:"Decrease speed"})),C.a.createElement("div",null,C.a.createElement("span",{className:"setting-legend"},"Volume:"),C.a.createElement("input",{type:"range",min:"1",max:"100",value:"100",className:"slider-volume"}))))},L=(t(97),function(A){Object(l.a)(t,A);var e=Object(i.a)(t);function t(A){var n;return Object(g.a)(this,t),(n=e.call(this,A)).getAllSongs=function(A){n.setState({loading:!0});var e=A.sortBy?A.sortBy+","+A.sortOrder:n.state.params.sort,t=Object(a.a)(Object(a.a)(Object(a.a)({},n.state.params),A),{},{sort:e});n.setState({params:t}),c.getAllSongs(t).then((function(A){var e=n.props.match.params.id,t={};e&&(t=A.find((function(A){return A.path===e}))),t.path&&n.playSong(t),n.setState({songData:A,loading:!1})})).catch((function(A){console.log(A),I.a.error(A),n.setState({loading:!1})}))},n.playSong=function(A){n.setState({song:A}),n.getLyric(A),console.log(A)},n.getLyric=function(A){n.setFetchingLyric(),A.lyric?(A.lyric.endsWith(".lrc")?n.isLrc=!0:n.isLrc=!1,c.getLyric(A.lyric).then((function(A){n.saveLyric(A)})).catch((function(A){console.log(A),I.a.error(A)}))):n.setNoLyric()},n.saveLyric=function(A){n.lines=A.trim().split("\n"),n.initLyric()},n.isNoLyric=function(){return 0===n.lines.length},n.setNoLyric=function(){n.lines=[],n.initLyric()},n.setFetchingLyric=function(){n.lines=[],n.div_result.innerHTML=w.b},n.initLyric=function(){n.div_result.innerHTML="",n.startTimes=[],n.endTimes=[],n.cntWord=0,n.offsetTime=0,n.currWordID=-1,n.isNoLyric()?n.div_result.innerHTML=w.d:n.isLrc?n.initLrcLyric():n.initTrcLyric()},n.initTrcLyric=function(){var A,e,t,a,g,l,i,r,C;n.div_result.innerHTML="";for(var s=0;s<n.lines.length;s++)if(null!=(A=n.lines[s].match(/\[\d+:\d+\.\d+\]/g))){if(e=K(A[0]),t=(A=n.lines[s].substring(A[0].length)).match(/<\d+>[^\<]*/g),l=N("div",null,"line"),null==t){console.log("Khi n\xe0o th\xec n\xf3 m\u1edbi nh\u1ea3y v\xe0o \u0111\xe2y???");var I=N("span");I.setAttribute("class","not-pass-word"),I.innerText=A,""==I.innerText.trim()&&(I.innerHTML="&nbsp;"),l.appendChild(I),n.div_result.appendChild(l);continue}a=e;for(var o=0;o<t.length;o++){g=b(g=a+parseFloat(t[o].match(/\d+/)[0])/1e3);var c=N("span","word-"+n.cntWord,"not-pass-word",{"time-start":a,"time-end":g});c.innerText=t[o].replace(/<\d+>/,""),""==c.innerText.trim()&&(c.innerHTML="&nbsp;",c.setAttribute("is-empty","1")),n.startTimes[n.cntWord]=a,n.endTimes[n.cntWord]=g,a=g,n.cntWord++,l.appendChild(c)}n.div_result.appendChild(l)}else n.lines[s].includes("offset:")?(n.offsetTime=n.lines[s].match(/[0-9|-]+/g),n.offsetTime=parseInt(n.offsetTime)):n.lines[s].includes("author:")?r=n.lines[s].substring("[author:".length,n.lines[s].length-1):n.lines[s].includes("createdDate:")&&(C=n.lines[s].substring("[createdDate:".length,n.lines[s].length-1));(r||C)&&(l=N("div",null,"line"),n.div_result.appendChild(l),(l=N("div",null,"line")).innerText="-----------",n.div_result.appendChild(l),i=N("div",null,"lyric-info"),n.div_result.appendChild(i)),r&&((l=N("div",null,"line")).innerText="Author: "+r,i.appendChild(l)),C&&((l=N("div",null,"line")).innerText="Date: "+C,i.appendChild(l))},n.initLrcLyric=function(){var A,e,t,a,g,l,i,r,C;n.div_result.innerHTML="";for(var s=0;s<n.lines.length;s++)if(null!=(A=n.lines[s].match(/\[\d+:\d+\.\d+\]/g))){if(e=K(A[0]),t=(A=n.lines[s].substring(A[0].length)).match(/<\d+>[^\<]*/g),l=N("div",null,"line"),null==t){console.log("Khi n\xe0o th\xec n\xf3 m\u1edbi nh\u1ea3y v\xe0o \u0111\xe2y???");var I=N("span");I.setAttribute("class","not-pass-word"),I.innerText=A,""==I.innerText.trim()&&(I.innerHTML="&nbsp;"),l.appendChild(I),n.div_result.appendChild(l);continue}a=e;for(var o=0;o<t.length;o++){g=b(g=a+parseFloat(t[o].match(/\d+/)[0])/1e3);var c=N("span","word-"+n.cntWord,"not-pass-word",{"time-start":a,"time-end":g});c.innerText=t[o].replace(/<\d+>/,""),""==c.innerText.trim()&&(c.innerHTML="&nbsp;",c.setAttribute("is-empty","1")),n.startTimes[n.cntWord]=a,n.endTimes[n.cntWord]=g,a=g,n.cntWord++,l.appendChild(c)}n.div_result.appendChild(l)}else n.lines[s].includes("offset:")?(n.offsetTime=n.lines[s].match(/[0-9|-]+/g),n.offsetTime=parseInt(n.offsetTime)):n.lines[s].includes("author:")?r=n.lines[s].substring("[author:".length,n.lines[s].length-1):n.lines[s].includes("createdDate:")&&(C=n.lines[s].substring("[createdDate:".length,n.lines[s].length-1));(r||C)&&(l=N("div",null,"line"),n.div_result.appendChild(l),(l=N("div",null,"line")).innerText="-----------",n.div_result.appendChild(l),i=N("div",null,"lyric-info"),n.div_result.appendChild(i)),r&&((l=N("div",null,"line")).innerText="Author: "+r,i.appendChild(l)),C&&((l=N("div",null,"line")).innerText="Date: "+C,i.appendChild(l))},n.onSearch=function(A){},n.state={songData:[],params:{page:0},loading:!1,action:"",showUpsertModal:!1,showConfirmModal:!1,categoryOptions:[],song:{}},n.lines=[],n.lyric="",n.lyricFile="",n.isLrc=!1,n.words=[],n.startTimes=[],n.endTimes=[],n.cntWord=0,n.offsetTime=0,n.currWordID=-1,n.myAudio=null,n.playLyricInterval=null,n.currErrWord=-1,n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.div_result=C.a.createRef(),this.getAllSongs({})}},{key:"render",value:function(){var A=this,e=this.state,t=e.songData,a=e.song,g=a&&a.fileName?"https://ducdongyyen.com/laravel/public/api/song/file?file="+a.fileName:null,n=a&&a.imageUrl?"https://ducdongyyen.com/laravel/public"+a.imageUrl:p.a,l="url(".concat(a&&a.imageUrl?"'https://ducdongyyen.com/laravel/public"+a.imageUrl+"'":u.a,")"),i=this.props.match.params.id;return C.a.createElement("div",{className:"body_wrapper body-light"},C.a.createElement("div",{id:"hide_when_fullscreen"},C.a.createElement("div",{className:"div-header"},C.a.createElement("i",{className:"fas fa-moon btn_dark_mode",title:"Dark mode"})),C.a.createElement("div",{className:"edit-time"},"Posted on: 3/9/2021. Last modified: 3/9/2021. SongID: ",i),t&&0!==t.length&&C.a.createElement(y,{songData:t,getAllSongs:this.getAllSongs,playSong:this.playSong,onSearch:this.onSearch})),C.a.createElement(F,{song:a,songURL:g}),C.a.createElement("div",{id:"lyric_playground"},C.a.createElement("div",{id:"div_left_wrapper",className:"left_normal"},C.a.createElement("img",{style:{cursor:"pointer"},className:"left_img spinning",src:n}),C.a.createElement("div",{className:"left_info"},C.a.createElement("div",{className:"left_title"},a.title),C.a.createElement("div",{className:"left_artist"},a.artist),C.a.createElement("div",{className:"left_album"},"(",a.album?a.album:"No Album",")"))),C.a.createElement("div",{style:{height:"100%"}},C.a.createElement("div",{id:"div_background",className:"bg-image",style:{backgroundImage:l,textAlign:"center"}})),C.a.createElement("div",{id:"div_result",className:"lyric_normal custom-scrollbar show-left-normal karaoke-mode div-res-picture-bg",style:{textAlign:"center"},ref:function(e){return A.div_result=e}}),C.a.createElement(T,null),C.a.createElement("div",{className:"setting_bottom"},C.a.createElement("i",{className:"fa fa-arrows-alt btn_align btn_fullscreen"})),C.a.createElement("div",{style:{clear:"both"}})))}}]),t}(r.PureComponent));e.default=Object(s.g)(L)},91:function(A,e,t){},93:function(A,e,t){A.exports=t.p+"static/media/background.111abdbb.jpg"},94:function(A,e,t){A.exports=t.p+"static/media/spin.111abdbb.jpg"},95:function(A,e){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4RDmRXhpZgAATU0AKgAAAAgABAE7AAIAAAAJAAAISodpAAQAAAABAAAIVJydAAEAAAASAAAQzOocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFuaHR1IFRhAAAABZADAAIAAAAUAAAQopAEAAIAAAAUAAAQtpKRAAIAAAADMDEAAJKSAAIAAAADMDEAAOocAAcAAAgMAAAIlgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjA6MDE6MDMgMjI6NTg6NTIAMjAyMDowMTowMyAyMjo1ODo1MgAAAEEAbgBoAHQAdQAgAFQAYQAAAP/hCxtodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDIwLTAxLTAzVDIyOjU4OjUyLjAxMjwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT5Bbmh0dSBUYTwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAcF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"},96:function(A,e,t){},97:function(A,e,t){}}]);