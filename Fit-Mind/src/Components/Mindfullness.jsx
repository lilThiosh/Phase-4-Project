import React, {useState} from "react";



function Mindfullness() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        const exerciseData = {
            name: name,
            description: description,
            difficulty: difficulty
          };
          try {
            const response = await fetch('/add_exercise', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(exerciseData)
            }); 
            const result = await response.json();
            alert(result.message || result.error);
            
            // Clear form fields after successful submission
            setName('');
            setDescription('');
            setDifficulty('');
          } catch (error) {
            console.error('Error adding exercise:', error);
            alert('An error occurred while adding the exercise.');
          }
        };
      
        return (
          <div>
            <h1>Add Exercise</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label><br />
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              /><br />
              <label htmlFor="description">Description:</label><br />
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea><br />
              <label htmlFor="difficulty">Difficulty:</label><br />
              <input
                type="text"
                id="difficulty"
                name="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                required
              /><br /><br />
              <button type="submit">Add Exercise</button>
            </form>
          </div>
        );
      }
      
      export default Mindfullness; 
    

