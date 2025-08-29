                            Ans:01
  getElementById vs getElementsByClassName vs querySelector / querySelectorAll
 **getElementById("id")** → Returns one element with that specific ID.  
   Works only for unique ID. Example: selecting `<div id="box">`.  

- **getElementsByClassName("class")** → Returns all elements with the given class in a live HTMLCollection.  
   Like taking all elements with class `.card`.  

- **querySelector("selector")** → Returns the first element that matches a CSS selector.  
   Example: `document.querySelector(".card")` → gives the first `.card`.  

- **querySelectorAll("selector")** → Returns all matching elements in a static NodeList.  
   Example: `document.querySelectorAll(".card")` → gives all `.card`s but not live.

                                    ## Ans:02

## 2. Create and Insert Element into DOM
- **Definition:** We can create new HTML elements with `document.createElement("tagName")` and insert them using `appendChild()` or `append()`.  
- **Explanation:** Suppose we create a `<p>` element and then add it inside a `div`. This way we dynamically add content without writing HTML manually.


                    Ans:03


What is **Event Bubbling** and how does it work?

Definition: When an event on a child element automatically Passes on upward to its parent elements in the DOM.

How it works: Event triggers first on the target element (child) → then moves to parent → continues up to Antecedents unless explicitly stopped.



                    Ans:04
What is **Event Delegation** in JavaScript? Why is it useful?
Definition:
Attaching an event listener to a parent element that handles events from its child elements.

How it works / Usefulness:

When an event happens on a child element, the parent listener detects it.

No need to add separate listeners for dynamically added child elements.

Reduces code and improves performance.

                Ans:05
What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault(): Stops the default action of an element, like preventing a form from submitting or a link from redirecting. The event still moves up the DOM tree.

stopPropagation(): Stops the event from traveling to parent elements, so ancestors won’t detect it, but the default action of the element may still happen.

Difference: preventDefault blocks the default browser behavior, stopPropagation blocks the event flow to other elements.


