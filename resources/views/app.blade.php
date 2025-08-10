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

        <title inertia>{{ config('app.name', 'Laravel') }}</title inertia>
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
    </body>
</html>
