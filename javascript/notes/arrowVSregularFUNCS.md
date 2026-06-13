reasons arrow funcs are better:

- much more concise and clean
- this behaves differently. regular funcs get their own this depending on how theyre called, arrow funcs do not create their own this. they inherit this from the surrounding scope

- arrow funcs cannot be constructors. cannot be used with new
- arrow funcs don't have their own arguments