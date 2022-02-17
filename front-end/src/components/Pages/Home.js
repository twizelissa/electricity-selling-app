import React from "react";

export const Home = () => {
  return (
    <div>
      <p>Purchase power </p>

      <form>
<ul class="form-style-1">
    
<li>
        <label>Meter <span class="required">*</span></label>
        <input type="text" name="meter" class="field-long" placeholder="Electric Meter number" required  min="6" max="6"/>
    </li>
    <li>
        <label>Amount<span class="required">*</span></label>
        <input type="text" name="amount" class="field-long" placeholder="Amount In FRW" required />
    </li>

    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>

    </div>
  );
};
