!function e(t,r,n){function o(a,s){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var l=r[a]={exports:{}};t[a][0].call(l.exports,function(e){var r=t[a][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[a].exports}for(var i="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({1:[function(e,t,r){function n(){var e={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:null};return e.enable=function(){var e=this;o(function(t){e.init(t),e.reset(),e.win.on("hashchange",e.reset),e.win.on("scroll",function(){e.linkScroll||(e.winScroll=!0)}),setInterval(function(){e.winScroll&&e.onScroll()},25),e.win.on("resize",function(){e.winResize=!0}),setInterval(function(){e.winResize&&e.onResize()},25),e.onResize()})},e.init=function(e){var t=(e(document),this);this.navBar=e("div.wy-side-scroll:first"),this.win=e(window),e(document).on("click","[data-toggle='wy-nav-top']",function(){e("[data-toggle='wy-nav-shift']").toggleClass("shift"),e("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var r=e(this);e("[data-toggle='wy-nav-shift']").removeClass("shift"),e("[data-toggle='rst-versions']").toggleClass("shift"),t.toggleCurrent(r),t.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){e("[data-toggle='rst-versions']").toggleClass("shift-up")}),e("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>"),e(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var r=e(this);expand=e('<span class="toctree-expand"></span>'),expand.on("click",function(e){return t.toggleCurrent(r),e.stopPropagation(),!1}),r.prepend(expand)})},e.reset=function(){var e=encodeURI(window.location.hash);if(e)try{var t=$(".wy-menu-vertical").find('[href="'+e+'"]');$(".wy-menu-vertical li.toctree-l1 li.current").removeClass("current"),t.closest("li.toctree-l2").addClass("current"),t.closest("li.toctree-l3").addClass("current"),t.closest("li.toctree-l4").addClass("current")}catch(r){console.log("Error expanding nav for anchor",r)}},e.onScroll=function(){this.winScroll=!1;var e=this.win.scrollTop(),t=e+this.winHeight,r=this.navBar.scrollTop(),n=r+(e-this.winPosition);0>e||t>this.docHeight||(this.navBar.scrollTop(n),this.winPosition=e)},e.onResize=function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},e.hashChange=function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},e.toggleCurrent=function(e){var t=e.closest("li");t.siblings("li.current").removeClass("current"),t.siblings().find("li.current").removeClass("current"),t.find("> ul li.current").removeClass("current"),t.toggleClass("current")},e}var o="undefined"!=typeof window?window.jQuery:e("jquery");t.exports.ThemeNav=n(),"undefined"!=typeof window&&(window.SphinxRtdTheme={StickyNav:t.exports.ThemeNav})},{jquery:"jquery"}],2:[function(e,t,r){function n(){var e=a.get(),t={project:e.project,version:e.version,page:e.page,theme:e.get_theme_name(),format:"jsonp"};"docroot"in e&&(t.docroot=e.docroot),"source_suffix"in e&&(t.source_suffix=e.source_suffix),0===window.location.pathname.indexOf("/projects/")&&(t.subproject=!0),$.ajax({url:e.api_host+"/api/v2/footer_html/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:t,success:function(e){s.init(e.version_compare),o(e),i()},error:function(){console.error("Error loading Read the Docs footer")}})}function o(e){var t=a.get();if(t.is_rtd_theme()?$("div.rst-other-versions").html(e.html):$("body").append(e.html),e.version_active?!e.version_supported:$(".rst-current-version").addClass("rst-out-of-date"),e.promo&&t.show_promo()){var r=new c.Promo(e.promo_data.id,e.promo_data.text,e.promo_data.link,e.promo_data.image);r&&r.display()}}function i(){function e(e){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(e)}$.ajaxSetup({beforeSend:function(t,r){e(r.type)||t.setRequestHeader("X-CSRFToken",$("a.bookmark[token]").attr("token"))}})}var a=e("./rtd-data"),s=e("./version-compare"),c=e("../sponsorship");t.exports={init:n}},{"../sponsorship":9,"./rtd-data":4,"./version-compare":7}],3:[function(e,t,r){function n(){var e=o.get();if("builder"in e&&"mkdocs"==e.builder){$("<input>").attr({type:"hidden",name:"project",value:e.project}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"version",value:e.version}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"type",value:"file"}).appendTo("#rtd-search-form"),$("#rtd-search-form").prop("action",e.api_host+"/search/");var t=$("nav.wy-nav-side:first"),r=$(window),n="stickynav",i=function(){t.height()<=r.height()?t.addClass(n):t.removeClass(n)};r.on("resize",i),i()}}var o=e("./rtd-data");t.exports={init:n}},{"./rtd-data":4}],4:[function(e,t,r){function n(){var e=Object.create(o),t={api_host:"https://readthedocs.org"};return $.extend(e,t,window.READTHEDOCS_DATA),e}var o={is_rtd_theme:function(){return"sphinx_rtd_theme"===this.get_theme_name()},is_sphinx_builder:function(){return!("builder"in this)||"mkdocs"!=this.builder},get_theme_name:function(){return"sphinx_rtd_theme"!==this.theme&&1===$("div.rst-other-versions").length?"sphinx_rtd_theme":this.theme},show_promo:function(){return"https://readthedocs.com"!==this.api_host&&this.is_sphinx_builder()&&this.is_rtd_theme()}};t.exports={get:n}},{}],5:[function(e,t,r){function n(){var e=i.get();o(e)}function o(e){var t=e.project,r=e.version,n=e.language||"en",o=e.api_host,i=(e.docroot,e.subprojects||{}),a=e.canonical_url||"/",s=function(e){var s=$.Deferred(),c=document.createElement("a");c.href=o,c.pathname="/api/v2/search",c.search="?q="+e+"&project="+t+"&version="+r+"&language="+n,s.then(function(r){var n=r.hits||{},o=n.hits||[];if(o.length)for(var s in o){var c=o[s],d=c.fields||{},l=$('<li style="display: none;"></li>'),h=document.createElement("a"),u=c.highlight;if(h.href=a,d.project!=t){var p=i[d.project];h.href=p}if(h+=d.path+DOCUMENTATION_OPTIONS.FILE_SUFFIX,h.search="?highlight="+$.urlencode(e),l.append($("<a />").attr("href",h).html(d.title)),d.project!=t&&l.append($("<span>").text(" (from project "+d.project+")")),u.content.length){var f=$('<div class="context">').html(u.content[0]);f.find("em").addClass("highlighted"),l.append(f)}Search.output.append(l),l.slideDown(5)}Search.status.text(o.length?_("Search finished, found %s page(s) matching the search query.").replace("%s",o.length):_("Your search did not match any documents. Please make sure that all words are spelled correctly and that you've selected enough categories."))}).fail(function(t){Search.query_fallback(e)}).always(function(){$("#search-progress").empty(),Search.stopPulse(),Search.title.text(_("Search Results")),Search.status.fadeIn(500)}),$.ajax({url:c.href,complete:function(e,t){return"undefined"==typeof e.responseJSON||"undefined"==typeof e.responseJSON.results?s.reject():s.resolve(e.responseJSON.results)}}).error(function(e,t,r){return s.reject()})};"undefined"!=typeof Search&&(Search.query_fallback=Search.query,Search.query=s),Search.init()}var i=e("./rtd-data");t.exports={init:n}},{"./rtd-data":4}],6:[function(e,t,r){function n(){var e=o.get();if($(document).on("click","[data-toggle='rst-current-version']",function(){var e=$("[data-toggle='rst-versions']").hasClass("shift-up")?"was_open":"was_closed";_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Flyout","Click",e])}),!("builder"in e)||"builder"in e&&"mkdocs"!=e.builder){var t=i.ThemeNav;if($(document).ready(function(){setTimeout(function(){t.navBar||t.enable()},1e3)}),e.is_rtd_theme()){var r=jquery("div.wy-side-scroll:first");if(!r.length){var n=jquery("nav.wy-nav-side:first"),a=$("<div />").addClass("wy-side-scroll");n.children().detach().appendTo(a),a.prependTo(n),t.navBar=a}}}}var o=e("./rtd-data"),i=e("./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js");t.exports={init:n}},{"./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js":1,"./rtd-data":4}],7:[function(e,t,r){function n(e){var t=o.get();if(!e.is_highest){var r=window.location.pathname.replace(t.version,e.slug),n=$('<div class="admonition warning"> <p class="first admonition-title">Note</p> <p class="last"> You are not using the most up to date version of the library. <a href="#"></a> is the newest version.</p></div>');n.find("a").attr("href",r).text(e.version);var i=$("div.body");i.length||(i=$("div.document")),i.prepend(n)}}var o=e("./rtd-data");t.exports={init:n}},{"./rtd-data":4}],8:[function(e,t,r){var n=(e("./sponsorship"),e("./doc-embed/footer.js")),o=e("./doc-embed/mkdocs"),i=(e("./doc-embed/rtd-data"),e("./doc-embed/sphinx")),a=e("./doc-embed/search");$(document).ready(function(){n.init(),i.init(),o.init(),a.init()})},{"./doc-embed/footer.js":2,"./doc-embed/mkdocs":3,"./doc-embed/rtd-data":4,"./doc-embed/search":5,"./doc-embed/sphinx":6,"./sponsorship":9}],9:[function(e,t,r){function n(e,t,r,n){this.id=e,this.text=t,this.link=r,this.image=n,this.promo=null}t.exports={Promo:n},n.prototype.create=function(){function e(){_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Promo","Click",t.id])}var t=this,r=$("nav.wy-nav-side");if(r.length){promo=$("<div />").attr("class","wy-menu rst-pro");{var n=$("<div />").attr("class","rst-pro-about"),o=$("<a />").attr("href","http://docs.readthedocs.org/en/latest/sponsors.html#sponsorship-information").appendTo(n);$("<i />").attr("class","fa fa-info-circle").appendTo(o)}if(n.appendTo(promo),t.image){{var i=$("<a />").attr("class","rst-pro-image-wrapper").attr("href",t.link).attr("target","_blank").on("click",e);$("<img />").attr("class","rst-pro-image").attr("src",t.image).appendTo(i)}promo.append(i)}var a=$("<span />").html(t.text);return $(a).find("a").each(function(){$(this).attr("class","rst-pro-link").attr("href",t.link).attr("target","_blank").on("click",e)}),promo.append(a),promo.appendTo(r),promo.wrapper=$("<div />").attr("class","rst-pro-wrapper").appendTo(r),promo}},n.prototype.display=function(){var e=this.promo;e||(e=this.promo=this.create()),e&&e.show()},n.prototype.disable=function(){},n.from_variants=function(e){if(0==e.length)return null;var t=Math.floor(Math.random()*e.length),r=e[t],o=r.text,i=r.link,a=r.image,s=r.id;return new n(s,o,i,a)}},{}]},{},[8]);