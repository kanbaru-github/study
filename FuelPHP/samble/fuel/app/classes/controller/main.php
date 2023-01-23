<?php

use Fuel\Core\Controller_Hybrid;

/**
 * メインコントローラー
 */
class Controller_Main extends Controller_Hybrid
{
	/** @var object テンプレート(Controller_Hybridを継承するのであれば必須) */
	public $template;

	public function before()
	{
		$this->template = 'main/template';
		// 順番に注意
		parent::before(); 
	}
	public function action_index()
	{
		$data = [];
		// $this->template->content = View::forge('main/index', $data);
		$this->template->content = View::forge("main/index");
	}
}