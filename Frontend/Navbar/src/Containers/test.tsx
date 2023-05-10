import { Component,JSXElement, createSignal } from 'solid-js';

export interface TestProps {children?: JSXElement}

const Test : Component<TestProps> = (props: any) => {

    const [count , setCount] = createSignal(5);
    const increment = () => setCount(count() + 5);

    return (
        <>
        <button type="button" onClick={increment}>
            {count()}
        </button>

        <div class="card w-96 bg-neutral text-neutral-content bg">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Accept</button>
      <button class="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
        </>

    );

}

export default Test
