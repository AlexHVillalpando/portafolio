import parallax from './components/parallax.js';
import activeMenu from './components/selected_menu.js';
import updateDateYear from './helpers/date_updater.js';
import resetToHome from './helpers/reload_page.js';
import sendEmail from './helpers/send_form.js';
import changeLang from './helpers/language.js';

resetToHome();

activeMenu();

parallax();

updateDateYear();

sendEmail();

changeLang();
