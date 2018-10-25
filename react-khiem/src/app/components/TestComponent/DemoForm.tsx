import * as React from 'react';
import { reduxForm, Field } from 'redux-form';

let DemoForm = () => 
  <form>
      <div>
            <label>First Name</label>
            <Field name="firstname" component="input" />
      </div>
  </form>

DemoForm = reduxForm({
  form: 'demo'
})(DemoForm);

export default DemoForm;