<?php
// example usage: www.yoururl.com?@=phonenumber&word="put your text here"
/**
   * Recipient
   * 
   * 
   * @author     Uwe Cerron <uwecerron@gmail.com>
   */

class SMSMessage{

private  $myfields=array();
private $number;
private $message;
private $error;
//try to initialize fields here review for Dependency injection after 
public function __construct($myfields){
$this->myfields=$myfields;
}

/**
        *       sends message to specified number
        *
        *       @param       integer       $number
        *       @param       string        $message
        *
        */
private function send($number,$message){
 $this->myfields;
//broadcast  message to every field 
foreach ($this->myfields as $value){
    //echo $value;
    $user=$user_info['name'];
   // $user="uwe";
    $headers .= 'From: textrain@mainpage.us' . "\r\n";
    $to =$number."@".$value;
    $result = mail( $to, $user, $message,$headers ); 

}  
  if($result=='1'){
  echo $info= 'Message was sent to ' . $number;  
 } else { 
 
 echo $info='Could not deliver message, try again.';  
 }  //end foreach loop


}//end send() function



/**
        *       gets query and sanitizes parameters
        *
        *       @param       integer       $number
        *       @param       string        $message
        *       
        */
public function get($number,$message){
//sanitize and make sure its not empty
if(isset($number)&&isset($message)){ 
$this->number=intval ($number);
$message = wordwrap($message,70);
filter_var($message, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_LOW);
$this->message=$message;
self::send($this->number,$this->message);
}else{
   self::set_error("try submitting it again\n");

}
}//end get() function


/**
        *       allow for multiple error statuses and store it into a log in the future.
        *
        *       @param       integer       $number
        *       @param       string        $message
        *     
        */
 private function set_error($error)
        {
             echo $this->error = $error;

             $myFile = "error.log";
             $fh = fopen($myFile, 'a');
             fwrite($fh, $this->error. PHP_EOL);
             fclose($fh);
        }

}//end set_error() function

$phones =array("tmomail.net", "vmobl.com","messaging.sprintpcs.com","vtext.com","message.alltel.com","txt.att.net","myboostmobile.com","tmomail.net","email.uscc.net ","vtext.com","vmobl.com","sms.airtelmontana.com","fido.ca","mymetropcs.com","mobipcs.net","rinasms.com","mobile.celloneusa.com","utext.com");
$smsobject= new SMSMessage($phones);
$smsobject->get($_GET['@'],$_GET['word']);




?>

