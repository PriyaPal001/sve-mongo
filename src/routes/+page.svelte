<script>
    // @ts-ignore
    export let data;
    let poppies=data.hobbies;

    // @ts-ignore
    let cityList=data.cities;
    console.log(cityList);
</script>
{#each cityList as poppy}
    <div>
        <h2>{poppy.name}</h2>
        <p>{poppy.IPL}</p>
    </div>
{/each}
{#each poppies as pop}
    <div>
        <h2>{pop.name}</h2>
        <p>{pop.hobby}</p>
        <p>{pop.email}</p>
    </div>
{/each}

<form method="POST" action="?/createteam">
    <input type="text" name="City" placeholder="City" />
    <input type="text" name="IPL" placeholder="IPL" />
    <button type="submit">Submit</button>
</form>


<form action="?/createdata" method="POST">
    <input type="text" name="name" placeholder="name" />
    <input type="text" name="hobby" placeholder="hobby" />
    <input type="email" name="email" placeholder="email" />
    <button type="submit">Submit</button>
</form>