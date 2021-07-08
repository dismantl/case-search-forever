from flask import Blueprint
import requests

MJCS_URL = 'https://casesearch.courts.state.md.us/casesearch/processDisclaimer.jis'

bp = Blueprint('mjcsproxy', __name__)

@bp.route('/session')
def session():
    s = requests.Session()
    s.get(MJCS_URL)
    s.post(MJCS_URL, data={'disclaimer': 'Y', 'action': 'Continue'})
    return s.cookies['JSESSIONID']