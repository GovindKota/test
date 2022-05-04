<!--Local Registration:   Local registration scopes the availability of the registered components to the current component only.
 It makes the dependency relationship more explicit, and is more tree-shaking friendly.

 Global registration:   Global registration prevents build systems from removing unused components.
  If you globally register a component but end up not using it anywhere in your app, it will still be included in the final bundle.

Global registration makes dependency relationships less explicit in large applications.
 It makes it difficult to locate a child component's implementation from a parent component using it. 
 This can affect long-term maintainability similar to using too many global variables.-->