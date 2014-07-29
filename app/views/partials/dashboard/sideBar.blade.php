<nav class="navbar-side" role="navigation">
        <div class="navbar-collapse sidebar-collapse collapse noPadding">
            <ul id="side" class="nav navbar-nav side-nav">
                <!-- begin SIDE NAV USER PANEL -->
                <li class="side-user hidden-xs">
                    <img class="img-circle" src="img/profile-pic.jpg" alt="">
                    <p class="welcome">
                        <i class="fa fa-key"></i> Logged in as
                    </p>
                    <p class="name tooltip-sidebar-logout">
                        John
                        <span class="last-name">Smith</span> <a style="color: inherit" class="logout_open" href="#logout" data-toggle="tooltip" data-placement="top" title="Logout"><i class="fa fa-sign-out"></i></a>
                    </p>
                    <div class="clearfix"></div>
                </li>
                <!-- end SIDE NAV USER PANEL -->
                <!-- begin SIDE NAV SEARCH -->
                <li class="nav-search">
                    <form role="form">
                        <input type="search" class="form-control" placeholder="Search...">
                        <button class="btn">
                            <i class="fa fa-search"></i>
                        </button>
                    </form>
                </li>
                <!-- end SIDE NAV SEARCH -->
                <!-- begin DASHBOARD LINK -->
                <li>
                    <a class="active" href="index.html">
                        <i class="fa fa-dashboard"></i> Dashboard
                    </a>
                </li>
                <!-- end DASHBOARD LINK -->
                <!-- begin CHARTS DROPDOWN -->
                <li class="panel">
                    <a href="javascript:;" data-parent="#side" data-toggle="collapse" class="accordion-toggle" data-target="#charts">
                        <i class="fa fa-bar-chart-o"></i> Charts <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="collapse nav" id="charts">
                        <li>
                            <a href="flot.html">
                                <i class="fa fa-angle-double-right"></i> Flot Charts
                            </a>
                        </li>
                        <li>
                            <a href="morris.html">
                                <i class="fa fa-angle-double-right"></i> Morris.js
                            </a>
                        </li>
                    </ul>
                </li>
                <!-- end CHARTS DROPDOWN -->
            </ul>
        </div>
 </nav>