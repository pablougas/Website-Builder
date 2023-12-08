export default `
  @charset "utf-8";

  body {
    font-family: 'droid serif', Arial, sans-serif;
    background: #fff;
    font-weight: 300;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #6f6a66
  }

  a {
    color: #2c2c2a;
    text-decoration: none
  }

  a:hover,
  a:focus {
    color: #e95d00;
    text-decoration: none
  }

  .link-reverse {
    color: #e95d00
  }

  .link-reverse:hover,
  .link-reverse:focus {
    color: #ca5100
  }

  strong,
  b {
    font-weight: 600
  }

  p {
    line-height: 1.6
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: montserrat, Arial, sans-serif;
    font-weight: 700
  }

  h1 {
    font-size: 65px;
    line-height: 1;
    margin: 18px 0 45px;
    word-spacing: -5px
  }

  h2 {
    font-size: 60px;
    margin: 15px 0;
    word-spacing: -3px
  }

  h3 {
    font-size: 45px;
    margin: 15px 0;
    word-spacing: -3px
  }

  h4 {
    font-size: 20px;
    margin: 10px 0
  }

  h5 {
    font-size: 18px;
    margin: 20px 0 13px;
    color: #384047
  }

  h6 {
    font-size: 16px;
    margin: 10px 0;
    color: #384047
  }

  @media(max-width:767px) {
    h1 {
      font-size: 40px
    }

    h2 {
      font-size: 35px
    }

    h3 {
      font-size: 25px
    }
  }

  .caret {
    margin-top: -3px
  }

  .disabled {
    cursor: not-allowed;
    filter: alpha(opacity=65);
    -webkit-box-shadow: none;
    box-shadow: none;
    opacity: .65
  }

  .btn {
    font-family: montserrat, Arial, sans-serif;
    font-weight: 700;
    text-transform: uppercase
  }

  .btn-giant {
    padding: 18px 30px;
    font-size: 32px;
    line-height: 1.33;
    border-radius: 5px
  }

  .btn-lg,
  .btn-group-lg>.btn {
    padding: 14px 25px;
    font-size: 17px;
    line-height: 1.3;
    border-radius: 4px
  }

  .input-lg,
  .form-horizontal .form-group-lg .form-control {
    height: 52px;
    border-radius: 3px
  }

  .form-control {
    border-radius: 3px
  }

  .form-control:focus {
    border-color: #bbb4a7;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .input-group-lg>.form-control,
  .input-group-lg>.input-group-addon,
  .input-group-lg>.input-group-btn>.btn {
    border-radius: 3px
  }

  .btn-primary {
    color: #483f34;
    background-color: #ffc55f;
    border-color: #e7ad47
  }

  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary.active,
  .open>.dropdown-toggle.btn-primary {
    color: #483f34;
    background-color: #fdbf51;
    border-color: #e7ad47
  }

  .well {
    background: #f9f1e6;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none
  }

  .highlight-bg {
    background: #f9f1e6;
    padding: 24px 0
  }

  .has-margin-top {
    margin-top: 50px
  }

  .has-margin-bottom {
    margin-bottom: 50px
  }

  .has-margin-xs-top {
    margin-top: 10px
  }

  .has-margin-xs-bottom {
    margin-bottom: 30px
  }

  .has-margin-xs-right {
    margin-right: 20px
  }

  .has-no-margin {
    margin: 0
  }

  .has-padding {
    padding: 20px
  }

  .has-padding-xs {
    padding: 10px
  }

  .has-padding-vertical {
    padding: 20px 0
  }

  .has-padding-bottom {
    padding-bottom: 20px
  }

  .has-padding-xs-vertical {
    padding: 10px 0
  }

  .has-padding-xs-bottom {
    padding-bottom: 10px
  }

  .has-padding-xs-top {
    padding-top: 10px
  }

  .has-border {
    border: 1px solid #eadeda;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px
  }

  .has-border-bottom {
    border-bottom: 1px solid #eadeda
  }

  .section-title {
    text-align: center;
    color: #53504c;
    min-height: 40px;
    margin-bottom: 40px
  }

  .section-title h4 {
    position: relative
  }

  .section-title h4:after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: -12px;
    width: 30px;
    height: 4px;
    background: #919191;
    margin-left: -15px
  }

  .section-title.left-align {
    text-align: left
  }

  .section-title.left-align h4:after {
    left: 0;
    margin-left: 0
  }

  .well .section-title {
    margin-bottom: 20px
  }

  .badge {
    color: #918677;
    background-color: #e7e0d7
  }

  @media(min-width:768px) {
    .section-title.left-align-desktop {
      text-align: left
    }

    .section-title.left-align-desktop h4:after {
      left: 0;
      margin-left: 0
    }
  }

  @media(min-width:768px) {
    .navbar-header {
      max-width: 160px
    }
  }

  @media(min-width:992px) {
    .navbar-header {
      max-width: 280px
    }
  }

  .navbar-default {
    background-color: #fff;
    background-color: rgba(255, 255, 255, .7);
    border: 0
  }

  .navbar-default .navbar-nav>li>a {
    font-family: montserrat, Arial, sans-serif;
    text-transform: uppercase
  }

  .navbar-brand,
  .navbar-brand img,
  .navbar,
  .navbar-nav,
  .nav>li>a {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s
  }

  .navbar-brand {
    height: 85px
  }

  .navbar-brand img {
    max-height: 100%
  }

  .navbar {
    min-height: 85px
  }

  .navbar-nav {
    margin: 25px 0
  }

  .nav>li>a {
    padding: 7px 18px
  }

  .navbar-default .navbar-nav>li>a {
    color: #2c2c2a
  }

  .navbar-default .navbar-nav>li>a:hover,
  .navbar-default .navbar-nav>li>a:focus,
  .navbar-default .navbar-nav>li>a:active {
    color: #e95d00;
    background-color: transparent
  }

  .navbar-default .navbar-nav>.open>a,
  .navbar-default .navbar-nav>.open>a:hover,
  .navbar-default .navbar-nav>.open>a:focus {
    color: #e95d00;
    background-color: transparent
  }

  .navbar-default .navbar-nav>.active>a,
  .navbar-default .navbar-nav>.active>a:hover,
  .navbar-default .navbar-nav>.active>a:focus {
    color: #483f34;
    background-color: #ffc55f;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px
  }

  .navbar-toggle {
    margin-top: 17px
  }

  @media(min-width:992px) {
    .navbar-brand img {
      height: 60px
    }

    .navbar-default.shrink {
      background-color: #fff;
      border-bottom: solid 1px #f7f7f7;
      box-shadow: 0 2px 2px -1px rgba(0, 0, 0, .1);
      -webkit-box-shadow: 0 2px 2px -1px rgba(0, 0, 0, .1)
    }

    .shrink .navbar-brand {
      height: 75px
    }

    .shrink .navbar-brand img {
      height: 45px
    }

    .navbar.shrink {
      min-height: 50px
    }

    .shrink .navbar-nav {
      margin: 20px 0
    }

    .shrink .nav>li>a {
      padding: 7px 15px
    }
  }

  @media(max-width:991px) {
    .navbar-brand {
      height: 70px
    }

    .navbar {
      min-height: 50px
    }

    .navbar-nav {
      margin: 17px 0
    }

    .nav>li>a {
      padding: 7px 12px
    }
  }

  @media(max-width:991px) {
    .navbar-default {
      background-color: rgba(255, 255, 255, .9)
    }
  }

  @media(min-width:768px) {
    .navbar-right .dropdown-menu-left {
      left: 18px
    }

    .navbar-right .active .dropdown-menu-left {
      left: 0
    }
  }

  .carousel {
    height: 650px
  }

  .carousel-caption {
    z-index: 10;
    top: 33%;
    bottom: 0
  }

  @media(max-width:480px) {
    .carousel-caption {
      top: 25%
    }
  }

  .carousel .item {
    height: 650px;
    background-color: #e2beae
  }

  .carousel-control.left {
    background-image: none
  }

  .carousel-control.right {
    background-image: none
  }

  .carousel-control .icon-prev,
  .carousel-control .icon-next,
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right {
    top: 55%
  }

  .slide-one {
    background: url(../images/church-mountain-bg.jpg) no-repeat;
    background-size: cover
  }

  .slide-two {
    background: url(../images/church-man-sea.jpg) no-repeat;
    background-size: cover
  }

  .slide-three {
    background: url(../images/church-man-hope.jpg) no-repeat;
    background-size: cover
  }

  .event-cta {
    text-align: center
  }

  .event-cta p {
    font-size: 23px;
    margin: 0;
    margin-bottom: 10px;
    font-weight: 700;
    color: #393939
  }

  .event-cta span {
    color: #9f978c;
    font-family: montserrat, Arial, sans-serif;
    font-weight: 700
  }

  @media(min-width:992px) {
    .event-cta {
      text-align: left
    }

    .ec-txt {
      float: left
    }

    .event-cta p {
      margin-bottom: 0
    }

    .event-cta .btn {
      float: right
    }
  }

  .event-details .ed-title {
    display: block;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 5px
  }

  .event-details .ed-content {
    line-height: 2;
    color: #53504c
  }

  @media(max-width:767px) {
    .feature-block {
      text-align: center
    }

    .feature-block .img-responsive {
      margin: 0 auto
    }
  }

  @media(max-width:991px) {
    .center-this {
      text-align: center
    }

    .center-this .img-responsive {
      margin: 0 auto
    }
  }

  .el-block {
    text-align: center
  }

  .el-block h4 {
    position: relative;
    color: #53504c
  }

  .el-block h4:after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: -12px;
    width: 20px;
    height: 4px;
    background: #919191;
    margin-left: -10px
  }

  .el-head {
    color: #53504c;
    font-size: 18px;
    margin: 20px 0 5px
  }

  .el-cta {
    margin: 15px 0
  }

  .owl-carousel {
    display: none;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    z-index: 1;
    margin-bottom: 10px
  }

  .owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y
  }

  .owl-carousel .owl-stage:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0
  }

  .owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0px, 0px, 0px)
  }

  .owl-carousel .owl-controls .owl-nav .owl-prev,
  .owl-carousel .owl-controls .owl-nav .owl-next,
  .owl-carousel .owl-controls .owl-dot {
    cursor: pointer;
    cursor: hand;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .owl-carousel.owl-loaded {
    display: block
  }

  .owl-carousel.owl-loading {
    opacity: 0;
    display: block
  }

  .owl-carousel.owl-hidden {
    opacity: 0
  }

  .owl-carousel .owl-refresh .owl-item {
    display: none
  }

  .owl-carousel .owl-item {
    position: relative;
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .owl-carousel .owl-item img {
    display: block;
    width: 100%;
    -webkit-transform-style: preserve-3d
  }

  .owl-carousel.owl-text-select-on .owl-item {
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto
  }

  .owl-carousel .owl-grab {
    cursor: move;
    cursor: -webkit-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
    cursor: grab
  }

  .owl-carousel.owl-rtl {
    direction: rtl
  }

  .owl-carousel.owl-rtl .owl-item {
    float: right
  }

  .no-js .owl-carousel {
    display: block
  }

  .owl-theme .owl-controls {
    margin-top: 10px;
    text-align: center;
    -webkit-tap-highlight-color: transparent
  }

  .owl-theme .owl-controls .owl-nav {
    display: none
  }

  @media(min-width:1200px) {
    .owl-theme .owl-controls .owl-nav {
      display: block
    }

    .owl-theme .owl-controls .owl-nav div {
      position: absolute
    }

    .owl-theme .owl-controls .owl-nav .owl-prev {
      left: -10px;
      top: 55px
    }

    .owl-theme .owl-controls .owl-nav .owl-next {
      right: -10px;
      top: 55px
    }
  }

  .owl-theme .owl-controls .nav-arrow {
    width: 16px;
    height: 30px;
    background: url(../images/arrows.png) no-repeat;
    display: block
  }

  .owl-theme .owl-controls .nav-arrow.left {
    background-position: 0 0
  }

  .owl-theme .owl-controls .nav-arrow.right {
    background-position: 100% 0
  }

  .owl-theme .owl-dots .owl-dot {
    display: inline-block;
    zoom: 1;
    display: inline;
  }

  .owl-theme .owl-dots .owl-dot span {
    width: 10px;
    height: 10px;
    margin: 5px;
    background: #ddcbab;
    display: block;
    -webkit-backface-visibility: visible;
    -webkit-transition: opacity 200ms ease;
    -moz-transition: opacity 200ms ease;
    -ms-transition: opacity 200ms ease;
    -o-transition: opacity 200ms ease;
    transition: opacity 200ms ease;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px
  }

  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #ac7f62
  }

  .media-heading {
    color: #53504c
  }

  .media-content {
    margin-bottom: 20px
  }

  @media(max-width:767px) {
    .media-heading {
      margin-top: 20px
    }

    .bulletin {
      text-align: center
    }
  }

  .list-group {
    margin-bottom: 0
  }

  .list-group-item {
    background: url(../images/play.png) no-repeat 0 15px transparent;
    border: 0;
    border-top: 1px solid #e7e1df;
    padding-left: 20px
  }

  .list-group-item:first-child {
    border-top: 0
  }

  a.list-group-item-text {
    color: #9e9e9e
  }

  a.list-group-item:hover,
  a.list-group-item:focus {
    background-color: transparent
  }

  .img-gallery .fancybox img {
    margin: 0 auto;
    margin-bottom: 30px
  }

  .blockquote-centered {
    text-align: center;
    color: #393939;
    border: 0;
    line-height: 1.6;
    position: relative;
    cursor: hand
  }

  @media(min-width:767px) {
    .blockquote-centered {
      padding: 0 50px;
      font-size: 26px
    }
  }

  .blockquote-centered:before,
  .blockquote-centered:after {
    position: absolute;
    content: "";
    width: 50px;
    height: 50px
  }

  .blockquote-centered:before {
    background: url(../images/quote-1.png) no-repeat;
    left: 0;
    top: 0
  }

  .blockquote-centered:after {
    background: url(../images/quote-2.png) no-repeat;
    right: 0;
    bottom: 0
  }

  .blockquote-centered small {
    padding: 15px 0
  }

  .susbcribe-head {
    margin: 0;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 20px
  }

  .susbcribe-head span {
    color: #999085;
    font-weight: 400
  }

  .ketchup-error {
    display: none !important
  }

  @media(min-width:767px) {
    .subscribe-form .form-group {
      margin-bottom: 0
    }

    .susbcribe-head {
      margin: 0;
      text-align: left
    }

    .susbcribe-head span {
      display: block
    }
  }

  footer {
    background: #53504c;
    color: #f9f1e6;
    padding-top: 5px
  }

  footer h5 {
    color: #f9f1e6
  }

  .footer-links {
    margin: 0;
    padding: 0;
    list-style: none
  }

  .footer-links li {
    border-bottom: 1px solid #666462;
    padding: 5px
  }

  footer p {
    color: #ccc0c0
  }

  footer a {
    color: #ccc0c0
  }

  footer a:hover,
  footer a:focus {
    color: #ffb483
  }

  .copyright {
    background: #494743;
    padding-top: 20px;
    padding-bottom: 10px;
    margin-top: 35px
  }

  .social-icons a {
    opacity: .5
  }

  .social-icons a:hover,
  .social-icons a:focus {
    opacity: .8
  }

  .subpage-head {
    background-color: #f9f1e6;
    padding-top: 80px;
    padding-bottom: 20px
  }

  .subpage-head h3 {
    color: #53504c
  }

  @media(min-width:992px) {
    .subpage-head {
      padding-top: 110px
    }
  }

  .pagination>li>a,
  .pagination>li>span {
    color: #483f34
  }

  .pagination>li>a:hover,
  .pagination>li>span:hover,
  .pagination>li>a:focus,
  .pagination>li>span:focus {
    color: #917e68
  }

  .pagination>.active>a,
  .pagination>.active>span,
  .pagination>.active>a:hover,
  .pagination>.active>span:hover,
  .pagination>.active>a:focus,
  .pagination>.active>span:focus {
    background-color: #fdbf51;
    border-color: #e7ad47;
    color: #483f34
  }

  .vertical-links li {
    border-bottom: 1px solid #e6ddd4;
    padding: 8px 0
  }

  .tag-cloud a {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 10px;
    padding: 2px 8px;
    border: 1px solid #eceae4;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background: #f8f7f3;
    font-size: 12px
  }

  .comments-block>.media {
    border-bottom: 1px solid #eadeda;
    padding-bottom: 20px;
    margin-bottom: 20px
  }

  .comments-block>.media .media {
    border-top: 1px solid #eadeda;
    padding-top: 20px
  }

  .media-object {
    width: 40px
  }

  .comments-head {
    font-size: 35px;
    color: #53504c;
    border-bottom: 1px solid #eadeda;
    margin: 40px 0 20px;
    padding-bottom: 10px
  }

  .theme-showcase {
    margin-bottom: 50px
  }

  .theme-showcase h1 {
    font-size: 35px;
    color: #53504c;
    margin-bottom: 0
  }

  .nav-pills>li.active>a,
  .nav-pills>li.active>a:hover,
  .nav-pills>li.active>a:focus {
    color: #483f34;
    background-color: #ffc55f
  }

  a.list-group-item.active>.badge,
  .nav-pills>.active>a>.badge {
    color: #483f34
  }

  .list-group-item.active,
  .list-group-item.active:hover,
  .list-group-item.active:focus {
    background-color: transparent;
    color: #483f34
  }

  .panel-primary {
    border-color: #dbba80
  }

  .panel-primary>.panel-heading {
    color: #483f34;
    background-color: #ffc55f;
    border-color: #dbba80
  }

  .progress {
    background-color: #d3cfcc
  }

  .location-map {
    height: 260px;
    background-color: #f9f1e6
  }

  .location-map iframe {
    width: 100%;
    height: 260px;
    border: 0
  }

  .charity-box {
    background: #f9f1e6;
    overflow: hidden
  }

  .charity-image {
    width: 100%;
    float: left;
    margin-bottom: 30px
  }

  .charity-image img {
    min-width: 100%
  }

  .charity-desc {
    padding: 15px
  }

  .charity-desc h3 {
    font-size: 28px;
    color: #53504c;
    margin: 0 0 5px
  }

  .pledged-amount {
    font-size: 40px;
    color: #53504c;
    margin: 15px 0 5px
  }

  .pledged-amount.has-no-margin {
    margin: 0 0 5px
  }

  .donate-now {
    text-align: center;
    padding: 10px 0;
    width: 100%;
    float: left
  }

  @media(min-width:992px) {
    .charity-image {
      width: 420px;
      margin-bottom: 0;
      margin-right: 20px
    }
  }

  @media(min-width:768px) {
    .donate-now {
      text-align: right;
      padding: 0;
      float: right;
      width: auto
    }
  }

  .event-cal-wrap h2 {
    font-size: 18px;
    color: #2c2c2a
  }

  .flexslider {
    height: 700px
  }

  .flexslider .slides li {
    height: 700px
  }

  .flexslider-caption {
    margin: 250px auto 100px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .6)
  }

  .flexslider-caption h1,
  .flexslider-caption h2,
  .flexslider-caption h3,
  .flexslider-caption p,
  .flexslider-caption .btn {
    opacity: 0
  }

  .flexslider-caption .btn {
    text-shadow: none
  }

  .flex-active-slide .flexslider-caption {
    opacity: 0;
    -webkit-transform: translateX(3em);
    -moz-transform: translateX(3em);
    -ms-transform: translateX(3em);
    -o-transform: translateX(3em);
    transform: translateX(3em);
    -webkit-animation: photocaption .65s ease forwards;
    -moz-animation: photocaption .65s ease forwards;
    animation: photocaption .65s ease forwards;
    -webkit-animation-delay: .6s;
    -moz-animation-delay: .6s;
    animation-delay: .6s
  }

  .flex-active-slide .flexslider-caption h3 {
    opacity: 0;
    -webkit-animation: fade .65s ease forwards;
    -moz-animation: fade .65s ease forwards;
    animation: fade .65s ease forwards;
    -webkit-animation-delay: .6s;
    -moz-animation-delay: .6s;
    animation-delay: .6s
  }

  .flex-active-slide .flexslider-caption h1 {
    opacity: 0;
    -webkit-animation: fade .65s ease forwards;
    -moz-animation: fade .65s ease forwards;
    animation: fade .65s ease forwards;
    -webkit-animation-delay: .8s;
    -moz-animation-delay: .8s;
    animation-delay: .8s
  }

  .flex-active-slide .flexslider-caption h2 {
    opacity: 0;
    -webkit-animation: fade .65s ease forwards;
    -moz-animation: fade .65s ease forwards;
    animation: fade .65s ease forwards;
    -webkit-animation-delay: .6s;
    -moz-animation-delay: .6s;
    animation-delay: .6s
  }

  .flex-active-slide .flexslider-caption p {
    opacity: 0;
    -webkit-animation: fade .65s ease forwards;
    -moz-animation: fade .65s ease forwards;
    animation: fade .65s ease forwards;
    -webkit-animation-delay: .8s;
    -moz-animation-delay: .8s;
    animation-delay: .8s
  }

  .flex-active-slide .flexslider-caption .btn {
    opacity: 0;
    -webkit-animation: fade .65s ease forwards;
    -moz-animation: fade .65s ease forwards;
    animation: fade .65s ease forwards;
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s
  }

  @-webkit-keyframes fade {
    to {
      opacity: 1
    }
  }

  @-moz-keyframes fade {
    to {
      opacity: 1
    }
  }

  @keyframes fade {
    to {
      opacity: 1
    }
  }

  @-webkit-keyframes photocaption {
    to {
      opacity: 1;
      -webkit-transform: translateX(0)
    }
  }

  @-moz-keyframes photocaption {
    to {
      opacity: 1;
      -moz-transform: translateX(0)
    }
  }

  @keyframes photocaption {
    to {
      opacity: 1;
      transform: translateY(0)
    }
  }`