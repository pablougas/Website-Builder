/*!fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license*/
export default `
.fancybox-wrap,
.fancybox-skin,
.fancybox-outer,
.fancybox-inner,
.fancybox-image,
.fancybox-wrap iframe,
.fancybox-wrap object,
.fancybox-nav,
.fancybox-nav span,
.fancybox-tmp {
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  vertical-align: top
}

.fancybox-wrap {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 8020
}

.fancybox-skin {
  position: relative;
  background: #f9f9f9;
  color: #444;
  text-shadow: none;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px
}

.fancybox-opened {
  z-index: 8030
}

.fancybox-opened .fancybox-skin {
  -webkit-box-shadow: 0 10px 25px rgba(0, 0, 0, .5);
  -moz-box-shadow: 0 10px 25px rgba(0, 0, 0, .5);
  box-shadow: 0 10px 25px rgba(0, 0, 0, .5)
}

.fancybox-outer,
.fancybox-inner {
  position: relative
}

.fancybox-inner {
  overflow: hidden
}

.fancybox-type-iframe .fancybox-inner {
  -webkit-overflow-scrolling: touch
}

.fancybox-error {
  color: #444;
  font: 14px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 15px;
  white-space: nowrap
}

.fancybox-image,
.fancybox-iframe {
  display: block;
  width: 100%;
  height: 100%
}

.fancybox-image {
  max-width: 100%;
  max-height: 100%
}

#fancybox-loading,
.fancybox-close,
.fancybox-prev span,
.fancybox-next span {
  background-image: url(../images/fancybox_sprite.png)
}

#fancybox-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -22px;
  margin-left: -22px;
  background-position: 0 -108px;
  opacity: .8;
  cursor: pointer;
  z-index: 8060
}

#fancybox-loading div {
  width: 44px;
  height: 44px;
  background: url(../images/fancybox_loading.gif) center center no-repeat
}

.fancybox-close {
  position: absolute;
  top: -18px;
  right: -18px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 8040
}

.fancybox-nav {
  position: absolute;
  top: 0;
  width: 40%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  background: transparent url(../images/blank.gif);
  -webkit-tap-highlight-color: transparent;
  z-index: 8040
}

.fancybox-prev {
  left: 0
}

.fancybox-next {
  right: 0
}

.fancybox-nav span {
  position: absolute;
  top: 50%;
  width: 36px;
  height: 34px;
  margin-top: -18px;
  cursor: pointer;
  z-index: 8040;
  visibility: hidden
}

.fancybox-prev span {
  left: 10px;
  background-position: 0 -36px
}

.fancybox-next span {
  right: 10px;
  background-position: 0 -72px
}

.fancybox-nav:hover span {
  visibility: visible
}

.fancybox-tmp {
  position: absolute;
  top: -99999px;
  left: -99999px;
  visibility: hidden;
  max-width: 99999px;
  max-height: 99999px;
  overflow: visible !important
}

.fancybox-lock {
  overflow: hidden
}

.fancybox-overlay {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  display: none;
  z-index: 8010;
  background: url(../images/fancybox_overlay.png)
}

.fancybox-overlay-fixed {
  position: fixed;
  bottom: 0;
  right: 0
}

.fancybox-lock .fancybox-overlay {
  overflow: auto;
  overflow-y: scroll
}

.fancybox-title {
  visibility: hidden;
  font: normal 13px/20px "Helvetica Neue", Helvetica, Arial, sans-serif;
  position: relative;
  text-shadow: none;
  z-index: 8050
}

.fancybox-opened .fancybox-title {
  visibility: visible
}

.fancybox-title-float-wrap {
  position: absolute;
  bottom: 0;
  right: 50%;
  margin-bottom: -35px;
  z-index: 8050;
  text-align: center
}

.fancybox-title-float-wrap .child {
  display: inline-block;
  margin-right: -100%;
  padding: 2px 20px;
  background: 0 0;
  background: rgba(0, 0, 0, .8);
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  text-shadow: 0 1px 2px #222;
  color: #fff;
  font-weight: 700;
  line-height: 24px;
  white-space: nowrap
}

.fancybox-title-outside-wrap {
  position: relative;
  margin-top: 10px;
  color: #fff
}

.fancybox-title-inside-wrap {
  padding-top: 10px
}

.fancybox-title-over-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 10px;
  background: #000;
  background: rgba(0, 0, 0, .8)
}`;
