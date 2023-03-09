step1: identify the components
       header
       post-lost
       post
       postedit
       auth
step2:created new live-posts
step3:create the componentsng g c header
      ng g c post-list
      ng g c post
      ng g c post-edit
      ng g c auth

step4:placing header component
step4:adding menu bar 
   add some bootstrap
   https://www.w3schools.com/bootstrap/bootstrap_navbar.asp#gsc.tab=0
   goto this link take collaping the navigation bar code 
   from  <nav>between code only</nav>

   we need add below 3 steps under index.html under header section to boot srap the things properly

     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

step5:changing the menu bar item names
step6:modifying post list component to display the list of post
before this we have to compete individual post component
step7:improve post component
note:while we want to fine tune the post component it is occpying the entire page like app-root component if we want occupy some less space tan app component menent 

here we are giving some space for post-list component right there it seld we write this code

<div class="container">
  <div class="row">
    <div class="col-sm-6">
      <app-post-list></app-post-list>
    </div>
  </div>
</div>

step8:create list of objects in the post-list component ts file 
step9:
 @Input() post?:Post;

step10:routing
step11:connecting component with the service
step12:designing a form for post
step13:how we can save the post data 
how to connect html form to the ts file
step14:add new post and using form object send this post to post list page
step15:when ever we clicked on save button automatically we have to redirect post list page

Note:take the router help in this case

step16:few improvements for the post 
specially we want to see the preview of the image what we are uploading
we have to add img tag in the post-edit html

step17:edit a post
adding a param for route
note:if we want mention a parameter we can mention like below
post-edit/:index
note:to read all parameters we have to use activated route
private route:ActivatedRoute)

this.route.params.subscribe((params:Params)=>{
      if(params['index']){
        console.log(params['index']);

    }

step18:
getting post dqat to edit into post edit component 

step19:displaying likes
need to change our post model file


      saving the data in data base:

      step1:saving our data in data base

      create a file under app with the name of back-end.service.ts

      step2:creating a firebase backend: