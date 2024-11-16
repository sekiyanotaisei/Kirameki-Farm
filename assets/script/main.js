$(function () {
  $('#js-slider-1').slick({
    slidesToShow: 1,               // 1枚だけ表示
    slidesToScroll: 1,             // 1枚ずつスクロール
    autoplay: true,                // 自動スクロールを有効化
    autoplaySpeed: 3000,           // 自動スクロールの速度（3000ミリ秒 = 3秒）
    // dots: true,                    // ドットナビゲーションの表示
    arrows: false,                 // 前後の矢印を非表示
    appendDots: $('.price__gallery') // ドットナビゲーションをギャラリー部分に挿入
  });
});


$(".openbtn").click(function () {
  $(this).toggleClass("active");      // ボタンのアクティブ状態を切り替え
  $("#js-menu").toggleClass("show");  // メニューの表示・非表示を切り替え
});