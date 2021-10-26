<?php
include("db.php");
$fullname = '';
$email = '';
$phone = '';
$description= '';

if  (isset($_GET['id'])) {
  $id = $_GET['id'];
  $query = "SELECT * FROM contact_us WHERE id=$id";
  $result = mysqli_query($conn, $query);
  if (mysqli_num_rows($result) == 1) {
    $row = mysqli_fetch_array($result);
    $fullname = $row['fullname'];
    $email= $row['email'];
    $phone = $row['phone'];
    $description = $row['msg'];
  }
}

if (isset($_POST['update'])) {
  $id = $_GET['id'];
  $fullname= $_POST['fullname'];
  $email= $_POST['email'];
  $phone= $_POST['phone'];
  $description = $_POST['msg'];

  $query = "UPDATE contact_us set fullname = '$fullname', email = '$email', phone = '$phone', msg = '$description' WHERE id=$id";
  mysqli_query($conn, $query);
  $_SESSION['message'] = 'Task Updated Successfully';
  $_SESSION['message_type'] = 'warning';
  header('Location: index.php');
}

?>
<?php include('includes/header.php'); ?>
<div class="container p-4">
  <div class="row">
    <div class="col-md-4 mx-auto">
      <div class="card card-body">
      <form action="edit.php?id=<?php echo $_GET['id']; ?>" method="POST">
        <div class="form-group">
          <input name="fullname" type="text" class="form-control" value="<?php echo $fullname; ?>" placeholder="Update Title">
        </div> 
		
		<div class="form-group">
          <input name="email" type="text" class="form-control" value="<?php echo $email; ?>" placeholder="Update Title">
        </div>

		<div class="form-group">
          <input name="phone" type="text" class="form-control" value="<?php echo $phone; ?>" placeholder="Update Title">
        </div>
        <div class="form-group">
        <textarea name="description" class="form-control" cols="30" rows="10"><?php echo $description;?></textarea>
        </div>
        <button class="btn-success" name="update">
          Update
</button>
      </form>
      </div>
    </div>
  </div>
</div>
<?php include('includes/footer.php'); ?>
