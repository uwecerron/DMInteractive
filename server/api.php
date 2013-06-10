<?php
 include('../../db.php');
// for example: mainpage.php?@=phonenumber&word=" put your text here"

$val = $_GET['@']; 

$val2= $_GET['word'];



  
if ( isset( $_REQUEST ) && !empty( $_REQUEST ) ) {  
 if (  
 isset( $_REQUEST['@'], $_REQUEST['word'] ) &&  
  !empty( $_REQUEST['@']  )  
 ) {  
 
 
 //get ip address
  $ip=$_SERVER['REMOTE_ADDR'];
$date = date("H:i:s");

$original=time($date);

$hr  = 0;
$min = -2;
$sec = 0;

$modified = $original+$sec+($min*60)+($hr*60*60);
$date2=date(" H:i:s",$modified);
            $query = mysql_query("INSERT INTO `IPCHECK` (ip,counter) VALUES ( '$ip','$date')") or die(mysql_error());
			
			$query2=mysql_query("Select COUNT('$ip') FROM IPCHECK WHERE counter Between '$date2' and '$date'");
			$result=mysql_fetch_array($query2);
			if($query2>10){
				die('how are you?');
			}
			
			//query counter
			/*
$query2= mysql_query("SELECT COUNT(`ip`) FROM `IPCHECK` WHERE `counter` between  '$date2' and '$date'");

*/


/*
$queryip= mysql_query("SELECT COUNT(ip) as c ,DATE_FORMAT(counter, '%H:%i:%s') as m FROM `IPCHECK` where counter between '$modified' and '$date' GROUP BY m order by c desc limit 1;");

*/


/*
  SELECT COUNT(*),
         DATE_FORMAT(open_date, '%Y-%m-%d %H:%i')
    FROM camp_open
GROUP BY DATE_FORMAT(open_date, '%Y-%m-%d %H:%i')


*/




 
  $message= wordwrap( $_REQUEST['word'], 70 );  
 
  
  $number=$_REQUEST['@'];
  
  /*number@mms.att.net

number@txt.att.net
number@cingularme.com
number@mobile.mycingular.com
  
  */
  
  $myfields=$_REQUEST['@'];
 
  
   $myfields=array("tmomail.net", "vmobl.com","messaging.sprintpcs.com","vtext.com","message.alltel.com","txt.att.net","myboostmobile.com","tmomail.net","email.uscc.net ","vtext.com","vmobl.com","sms.airtelmontana.com","fido.ca","mymetropcs.com","mobipcs.net","rinasms.com","mobile.celloneusa.com","utext.com");
   
  
  foreach ($myfields as $value)
{
	
	$user=$user_info['name'];
	
	$headers .= 'From: textrain@mainpage.us' . "\r\n";
$to =$number."@".$value;
$result = @mail( $to, $user, $message,$headers ); 

}  
  $info= 'Message was sent to ' . $number;  
 } else { 
 
 $info='Submit Information.';  
 }  
}  
  
?>

