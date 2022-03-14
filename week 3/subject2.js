
/*

 JSX

 It is called JSX, and it is a syntax extension to JavaScript. 
 We recommend using it with React to describe what the UI should look like. 
 JSX may remind you of a template language, but it comes with the full power 
 of JavaScript.

 JSX produces React “elements”. We will explore rendering them to the DOM in
 the next section. Below, you can find the basics of JSX necessary to get 
 you started.
 
 */

const Subject = () => {
    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
      }
      
      const user = {
        firstName: 'Angel',
        lastName: 'Higueros'
      };
      
      const element = (
        <h1>
          Hola, {formatName(user)}!
        </h1>
      );
      
      ReactDOM.render(
        element,
        document.getElementById('root')
      );
}