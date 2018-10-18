# webpackProxy

Steps:

1. Clone Repo

2. Run "npm i"

3. Replace nginx.conf with the one present at root in this repo.

4. For Local -
   i. Comment the rule 'location ~ "/web/userInfo/[\d]"'
   ii. Un Comment the lines 51-58.
   iii. Comment the lines 49, 50.
   iv. run 'npm start'
   
   For Build -
   i. run 'npm run build'
   ii. Copy the dist folder inside html folder.
   iii. Un comment the rule 'location ~ "/web/userInfo/[\d]"'
   iv. Comment lines 51-58
   v. Un comment lines 49, 50.
   
5. Now open http://localhost.example.com/web/userInfo/5555 in browser.
