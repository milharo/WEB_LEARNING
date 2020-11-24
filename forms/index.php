<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'/>
    <title>Speaker Submission</title>
    <link rel='stylesheet' href='/styles/style.css'/>
  </head>
  <body>
    <header class='speaker-form-header'>
      <h1>Speaker Submission</h1>
      <p><em>Want to speak at our fake conference? Fill out
        this form.</em></p>
    </header>
    <form action='response.php' method='get' class='speaker-form'>
        <div class='form-row'>
            <label for='full-name'>Name</label>
            <input id='full-name' name='full-name' type='text'/>
        </div>

        <div class='form-row'>
            <label for='email'>Email</label>
            <input id='email'
             name='email'
             type='email'
             placeholder="joe@example.com"/>
        </div>

        <fieldset class='legacy-form-row'>
          <legend>Type of Talk</legend>
          <input id='talk-type-1'
                  name='talk-type'
                  type='radio'
                  value='main-stage' />
          <label for='talk-type-1' class='radio-label'>Main Stage</label>
          <input id='talk-type-2'
                name='talk-type'
                type='radio'
                value='workshop'
                checked />
          <label for='talk-type-2' class='radio-label'>Workshop</label>
        </fieldset>

        <div class='form-row'>
          <label for='t-shirt'>T-Shirt Size</label>
          <select id='t-shirt' name='t-shirt'>
            <option value='xs'>Extra Small</option>
            <option value='s'>Small</option>
            <option value='m'>Medium</option>
            <option value='l'>Large</option>
          </select>
        </div>

        <div class='form-row'>
          <label for='abstract'>Abstract</label>
          <textarea id='abstract' name='abstract'></textarea>

          <div class='instructions'>Describe your talk in 500 words or less</div>
        </div>
        <div class='form-row'>
          <label class='checkbox-label' for='available'>
            <input id='available'
                  name='available'
                  type='checkbox'
                  value='is-available'/>
            <span>I'm actually available the date of the talk</span>
          </label>
        </div>
        <div class='form-row'>
          <button>Odoslať</button>
        </div>

    </form>
  </body>
</html>