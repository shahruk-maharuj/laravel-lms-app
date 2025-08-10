<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="thumbnail" content="assets/images/eduna-page-thumbnail.html" />
        <meta name="description" content="Eduna - Online Education Courses HTML5 Template" />
        <meta name="keywords" content="Online Education Courses HTML5 Template" />
        <meta name="author" content="BizanTheme" />

        <title >Eduna - Online Education Courses HTML5 Template</title>
        <link rel="shortcut icon" href="{{ asset('assets/images/favicon.svg') }}" />

        <!-- Bootstrap -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/bootstrap.min.css') }}" />
        <!-- Animate CSS -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/animate.min.css') }}" />
        <!-- Owl Carousel CSS -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/owl.carousel.min.css') }}" />
        <!-- Swiper Slider CSS -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/swiper-bundle.min.css') }}" />
        <!-- Maginific Popup CSS -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/maginific-popup.min.css') }}" />
        <!-- Nice Select CSS -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/nice-select.min.css') }}" />
        <!-- Icofont -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/icofont.css') }}" />
        <!-- Uicons -->
        <link rel="stylesheet" href="{{ asset('assets/plugins/css/uicons.css') }}" />
        <!-- Main CSS -->
        <link rel="stylesheet" href="{{ asset('style.css') }}" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia

        <!-- Jquery JS -->
        <script src="{{ asset('assets/plugins/js/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/plugins/js/jquery-migrate.js') }}"></script>
        <!-- Bootstrap JS -->
        <script src="{{ asset('assets/plugins/js/bootstrap.min.js') }}"></script>

        <!-- Gsap JS -->
        <script src="{{ asset('assets/plugins/js/gsap/gsap.js') }}"></script>
        <script src="{{ asset('assets/plugins/js/gsap/gsap-scroll-to-plugin.js') }}"></script>
        <script src="{{ asset('assets/plugins/js/gsap/gsap-scroll-smoother.js') }}"></script>
        <script src="{{ asset('assets/plugins/js/gsap/gsap-scroll-trigger.js') }}"></script>
        <script src="{{ asset('assets/plugins/js/gsap/gsap-split-text.js') }}"></script>

        <!-- Wow JS -->
        <script src="{{ asset('assets/plugins/js/wow.min.js') }}"></script>
        <!-- Owl Carousel JS -->
        <script src="{{ asset('assets/plugins/js/owl.carousel.min.js') }}"></script>
        <!-- Swiper Slider JS -->
        <script src="{{ asset('assets/plugins/js/swiper-bundle.min.js') }}"></script>
        <!-- Magnific Popup JS -->
        <script src="{{ asset('assets/plugins/js/magnific-popup.min.js') }}"></script>
        <!-- CounterUp  JS -->
        <script src="{{ asset('assets/plugins/js/jquery.counterup.min.js') }}"></script>
        <script src="{{ asset('assets/plugins/js/waypoints.min.js') }}"></script>
        <!-- Nice Select JS -->
        <script src="{{ asset('assets/plugins/js/nice-select.min.js') }}"></script>
        <!-- Back To Top JS -->
        <script src="{{ asset('assets/plugins/js/backToTop.js') }}"></script>

        <!-- Main JS -->
        <script src="{{ asset('assets/plugins/js/active.js') }}"></script>
    </body>
</html>
