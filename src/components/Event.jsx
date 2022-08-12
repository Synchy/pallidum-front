import { Link } from 'react-router-dom'
const Event = () => {
  return (
    <div className='box-wrap'>
      <div className='box'>
        <div className='container1'>
          <div className='reserve'>
            <button>
              {' '}
              <span>Reserver</span>
            </button>
          </div>
          <div className='describe'>
            <h2>Pic Nique bucolique</h2>
            <br></br>
            <p>
              Venez rencontrer d'autres fidèles autour d'un bon pic et nique.
              Profiter de diverses activités physique en pleine nature pour vous
              ressourcer avec Mère Nature.{' '}
            </p>
          </div>
          <div className='info-describe'>
            <div className='date'>
              <p>Vendredi 12 aoôut 2022</p>
            </div>

            <div className='place'>
              <p>Parc du Grand Blottereau, Nantes</p>
            </div>
          </div>
        </div>
      </div>

      <div className='box'>
        <div className='container1'>
          <div className='reserve'>
            <button>
              {' '}
              <span>Reserver</span>
            </button>
          </div>
          <div className='describe'>
            <h2>La Soirée Deguisée</h2>
            <br></br>
            <br></br>
            <p>
              Déguisez-vous en ce que vous voulez et profiter de diverses
              activités physique ainsi des différentes personnes.
            </p>
          </div>
          <div className='info-describe'>
            <div className='date'>
              <p>Samedi 20 aoôut 2022</p>
            </div>

            <div className='place'>
              <p>Le Diamant, Paris</p>
            </div>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='container1'>
          <div className='reserve'>
            <button>
              {' '}
              <span>Reserver</span>
            </button>
          </div>
          <div className='describe'>
            <h2>Festival de Romain</h2>
            <br></br>
            <br></br>
            <p>
              Venez profiter de divers artistes de variétés et de leurs
              maginifique musiques tout cela dans une ambiance digne du
              Pallidum.{' '}
            </p>
          </div>
          <div className='info-describe'>
            <div className='date'>
              <p>Vendredi 27 août 2022</p>
            </div>

            <div className='place'>
              <p>Chez Romain</p>
            </div>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='container1'>
          <div className='reserve'>
            <button>
              {' '}
              <span>Reserver</span>
            </button>
          </div>
          <div className='describe'>
            <h2>Love Speak Dating</h2>
            <br></br>
            <br></br>
            <p>
              Venez rencontrer d'autres fidèles dans un bar tendance. Peut-être
              que vous rencontrerez le ou la fidèle de votre vie.{' '}
            </p>
          </div>
          <div className='info-describe'>
            <div className='date'>
              <p>Vendredi 2 septembre 2022</p>
            </div>

            <div className='place'>
              <p>Le Bibelot, Paris</p>
            </div>
          </div>
        </div>
      </div>
      <div className='box'>
        <div className='container1'>
          <div className='reserve'>
            <button>
              {' '}
              <span>Reserver</span>
            </button>
          </div>
          <div className='describe'>
            <h2>BrunchX Dimanche</h2>
            <br></br>
            <br></br>
            <p>
              Profitez d'une mâtinée brunch pour vous amuser tout en mangeant.
              Et pourquoi pas commencer par le dessert.
            </p>
          </div>
          <div className='info-describe'>
            <div className='date'>
              <p>Dimanche 4 septembre 2022</p>
            </div>

            <div className='place'>
              <p>Parc de Nantes</p>
            </div>
          </div>
        </div>
      </div>

      <Link to='/stars'>
        <div className='back'></div>
      </Link>
    </div>
  )
}

export default Event
