// ------ヘッダー関係-------
$(window).scroll(function() {
  // ヘッダーの高さを取得
  var headerHeight = $('.header-inner').outerHeight();
  // 現在のスクロール位置を取得
  var scrollValue = $(window).scrollTop();
  // #about セクションの上端の位置を取得
  var aboutOffset = $('#about').offset().top;

  // ヘッダーの高さを考慮して位置を調整
  var adjustedAboutOffset = aboutOffset - headerHeight;

  // スクロール位置が調整後の #about の位置を超えた場合
  if (scrollValue >= adjustedAboutOffset) {
    $('.header-name, .header-nav-btn').addClass('scroll-change-01'); // クラスを追加
    $('.header-nav-btn').addClass('scroll-change-02');               // クラスを削除
  } else {
    // スクロール位置が調整後の #about の位置より上の場合    
    $('.header-name, .header-nav-btn').removeClass('scroll-change-01'); // クラスを追加
    $('.header-nav-btn').removeClass('scroll-change-02');               // クラスを削除
  }
});

// ------ハンバーガーメニュー-------
// toggle=表示と非表示を切り替えるメソッド
// 300=0.3秒で表示・非表示を切り替える

$(function () {
  $("#hamburger-block").click( 
    function() {
    // ハンバーガーアイコンの切り替え
    $(this).toggleClass('is-active');

    // メニューの表示切り替え
      $(".ham-menu").toggle(300)     
    }
  );
});

// ハンバーガーメニュー内のメニュークリックすると、
// 3秒後にメニューはfadeout。removeだと消えたまま、復活しない。
$(function () {
  $(".ham-menu-btn").click( 
    function() {
      $(".ham-menu").fadeOut(300);
      $("#hamburger-block").removeClass('is-active'); // メニューが閉じられるときに☓を元に戻す
    });
});



  //---------------mv----------------------
  $(function() {
    $(".mv-slider").slick({
      autoplay: true,  //自動再生
      autoplaySpeed: 5000,
      arrows: false,
    });  
  });
  
  $(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    var mvOffset = $('.mv').offset().top;

    // .mvまでスクロールしたら
    if (scrollValue > mvOffset) {
      // フワッと表示する	
      $('.back-btn').fadeIn(500); // 500ミリ秒で表示           
     } else {
      // スクロール位置が.mvより上の場合はフワッと非表示にする	
     $('.back-btn').fadeOut(500); // 500ミリ秒で非表示
     }
    });


// 各sectionに↓のclassを持たせてフワっと出現させる
// style.scssのjs-activeとコンビ
  $(function () {
    // ウィンドウがスクロールされるたびに実行される関数
    $(window).scroll(function () {
      // ".js-scroll"というクラスを持つすべての要素に対して処理を行う
      $(".js-scroll").each(function () {
        // 対象となる要素のページの上からの位置を取得
        var targetOffset = $(this).offset().top;
        // ウィンドウの高さを取得
        var windowHeight = $(window).height();
        // 現在のスクロール位置 + ウィンドウの高さを計算
        var scrollPosition = $(window).scrollTop() + windowHeight;
  
        // 現在のスクロール位置が対象となる要素の位置を超えた場合
        if (scrollPosition > targetOffset) {
          // 要素に"js-active"というクラスを追加
          $(this).addClass("js-active");
        }
      });
    });
  });

  
  // ------モーダル-------  
 $(function () {
  $(".modal-open-01").click(
    function() {
      $(".modal-area-01").show();
      $('body').addClass('modal-open');
      // ↑（01～04）モーダル開いた時、scssのmodal-open追加
      // scssに書いたmodal-openとコンビ
    } );
  $(".modal-close").click(
    function() {
      $(".modal-area-01").hide();
      $('body').removeClass('modal-open');
      // ↑（01～04）モーダル開いた時、背景のスクロールをさせない措置
    }
  );
 });

 $(function () {
  $(".modal-open-02").click(
    function() {
      $(".modal-area-02").show();
      $('body').addClass('modal-open');
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-02").hide();
      $('body').removeClass('modal-open');
    }
  );
 });

 $(function () {
  $(".modal-open-03").click(
    function() {
      $(".modal-area-03").show();
      $('body').addClass('modal-open');
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-03").hide();
      $('body').removeClass('modal-open');
    }
  );
 });

 $(function () {
  $(".modal-open-04").click(
    function() {
      $(".modal-area-04").show();
      $('body').addClass('modal-open');
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-04").hide();
      $('body').removeClass('modal-open');
    }
  );
 });


