<?php

class DashboardController extends \BaseController {

	protected $layout = 'layouts.dashboard';
    /**
	 * Display a listing of the resource.
	 * GET /dashboard
	 *
	 * @return Response
	 */
	public function index()
	{
		$this->layout->content = View::make('secured.dashboard');
	}


}