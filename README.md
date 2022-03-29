# ratatouille
MERN restaurant project


- The Process Of Sending Data From The Backend To The Front End.
	Step 1: Create Express Server and api routes (get)
	Step 2:  Create state for the recipes (for this program we will just make them component state to learn basics)
	Step 3: Use useEffect (a hook that runs the moment our component is loaded) THIS is where we can use axios. Axis must be installed in the frontend folder with the proxy being declared in the main directory package.json

 useEffect(() => {
        const fetchRecipes = async () => {
            const { data } = axios.get(/api/recipes)
            setRecipes(data)
        }

        fetchRecipes
    }, [])

Step 4: We now need to create a proxy to tell our application to look into localhost port 5000 and not port 3000
