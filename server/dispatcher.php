<?php


//defining what url patterns get mapped into what funcitons.
//if no route is provided 'default' route is used
//namespace Dispatch;
include('SMS.php');
class Dispatch{

private $routes;
private $action;
private $params;
public function __construct($routes){
$this->routes=$routes;
}
/**
*Dispatch function - delegates action to other function and passes parameters to it
*/
public function dispatch(){
	//stear clear, allow only leters, numbers and slashes
	if(!empty($raw_route) and preg_match('/^[\p{L}\/\d]++$/uD', $_SERVER["PATH_INFO"]) == 0){
		die("Invalid URL");
	}
	//extract parameters
	$url_pieces = explode("/",$_SERVER["PATH_INFO"]);
	$this->action = $url_pieces[1];
	$this->params = array();
	if(count($url_pieces)>2){
		$this->params = array_slice($url_pieces, 2);
	}	
 
	//when no action is passed default action is performed
	if(empty($this->action)){
		$this->action="default";
	}
 
	//make sure the route is defined
	if(!in_array( $this->action, array_keys($this->routes))){
		die("Nothing to see here");
	}else{
		//select method from routes list
		$action_function=$this->routes[$this->action];
	    //call respective function;
	    $this->$action_function($this->params);
	   // call_user_func('Dispatch::'.$action_function,$this->params);
	}
 
}
 
//just an example
public function SMS(){
	echo "Hello to you too!";
}
public function computesum($var){
	$sum = 0;
	$i=0;
	foreach($var as $par){
		$par = intval($par);
		$sum += $par;
		if ($i !=0){echo " + ".$par;}
		else{echo $par;}
		$i++;
	}
 
	echo " = " . $sum;
}
}
$leroutes= array(
	"default" => "SMS",
	"hello" => "SMS",
	"sum"  => "computesum"
);
$object = new Dispatch($leroutes);
$object->dispatch();


?>



