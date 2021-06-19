<div id="root">
    <div class="center">
        <div class="columnt">
            <img class="logo" src="../assets/logo.png" width="200" height="200" alt="logo not found">
            <h1> Welcome to Your Funny.js App </h1>

            <p> Simple, opensource, minimal front end library. </p>
            <p> For a guide and recipes on how to configure / customize this project, </p>
            <p> check out the <a href="https://github.com/alirezaarzehgar/funny.js.git">funny.js</a> documentation. </p>
        </div>
    </div>
</div>

<script>
    console.log("Hello Funny.js");
</script>

<style>
     html, body, #root {
        height: 100%;
        margin: 0%;
        padding: 0%;

        background-color: rgb(255, 255, 255);
    }
    .columnt {
        display: flex;
        flex-direction: column;

        align-items: center;
    }

    .center {
        height: 100%;
        
        display: flex;
        justify-content: center;

        text-align: center;
    }

    .logo {
        margin-top: 5rem;
    }
</style>