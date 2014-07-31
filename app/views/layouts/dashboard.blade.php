@include('partials.header')

    <div class="container">
        <div class="col-md-3 noPadding">
            @include('partials.dashboard.sideBar')

        </div>
        <div class="col-md-9">

            @yield('content')
        </div>

        <div class="clearfix"></div>
    </div>



@include('partials.footer')