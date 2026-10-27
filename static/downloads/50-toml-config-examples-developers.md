# 50 TOML Config Examples for Developers

TOML is the quiet config language behind tools like Cargo, Hugo, and Python's pyproject.toml — readable, forgiving, and easy to get subtly wrong. These fifty examples cover the sections developers write most: server, database, logging, authentication, caching, email, storage, payments, and feature flags, plus profile variants for dev, staging, and production. They are written for developers starting a new project or standardizing configs across services. Copy a block, change the values, and the config is done.

## Resource

[server]
host = "127.0.0.1"
port = 8080
debug = true

[database]
engine = "postgres"
host = "db.local"
port = 5432
name = "app_db"

[app]
name = "my-app"
version = "1.0.0"
authors = ["Sam", "Lee"]

[logging]
level = "info"
file = "/var/log/app.log"
rotate = true

[features]
search = true
analytics = false
beta = false

[theme]
name = "dark"
accent = "#3366ff"
font = "Inter"

[api]
base_url = "https://api.example.com"
timeout = 30
retries = 3

[cache]
backend = "redis"
ttl = 3600
prefix = "app:"

[email]
smtp_host = "mail.example.com"
smtp_port = 587
tls = true

[storage]
provider = "s3"
bucket = "my-bucket"
region = "us-east-1"

[build]
optimize = true
minify = true
sourcemap = false

[limits]
max_upload_mb = 50
max_users = 1000
rate_limit = 100

[i18n]
default = "en"
supported = ["en", "es", "fr"]

[security]
password_min_length = 12
two_factor = true
session_hours = 24

[backup]
enabled = true
schedule = "daily"
keep_days = 30

[notifications]
email = true
push = false
slack_webhook = ""

[search]
engine = "sqlite"
index_path = "./index"
max_results = 20

[payments]
provider = "stripe"
currency = "USD"
test_mode = true

[jobs]
workers = 4
queue = "default"
retry_attempts = 3

[monitoring]
metrics = true
endpoint = "/metrics"
alert_email = "ops@example.com"

[profile.dev]
debug = true
log_level = "debug"

[profile.prod]
debug = false
log_level = "warn"

[users.admin]
name = "Admin"
email = "admin@example.com"
role = "admin"

[integrations.github]
enabled = true
token_env = "GITHUB_TOKEN"

[integrations.slack]
enabled = false
channel = "#general"

[content]
posts_per_page = 10
comments = true
rss = true

[media]
max_width = 1920
quality = 85
formats = ["jpg", "webp"]

[seo]
title_suffix = " | My Site"
meta_description = "A helpful site."
robots = "index, follow"

[analytics]
provider = "plausible"
domain = "example.com"

[auth]
method = "oauth"
providers = ["google", "github"]

[rate_limits.api]
per_minute = 60
burst = 120

[server.tls]
enabled = true
cert = "/etc/ssl/cert.pem"

[database.pool]
min = 2
max = 10
timeout = 5

[logging.outputs]
console = true
file = true
syslog = false

[features.flags]
new_dashboard = true
dark_mode = true

[app.meta]
created = 2026-10-27
license = "MIT"

[backup.s3]
bucket = "backups"
region = "eu-west-1"

[email.templates]
welcome = "welcome.html"
reset = "reset.html"

[cache.redis]
host = "127.0.0.1"
port = 6379
db = 0

[search.filters]
categories = true
tags = true
date_range = true

[payments.plans]
free = 0
pro = 9
team = 29

[monitoring.alerts]
email = "ops@example.com"
threshold_cpu = 80

[jobs.queues]
default = 4
email = 2
media = 2

[i18n.locales]
en = "English"
es = "Spanish"
fr = "French"

[profile.staging]
debug = true
log_level = "info"

[users.guest]
name = "Guest"
role = "reader"

[content.drafts]
visible = false
auto_save = true

[media.thumbnails]
sizes = [150, 300, 600]
format = "webp"

[seo.sitemap]
enabled = true
changefreq = "weekly"

[auth.sessions]
cookie_name = "session"
secure = true
same_site = "lax"

## How to use

1. Pick the items that fit your situation and ignore the rest — a template pack works best when you use ten items well, not all of them once.
2. Replace every bracketed placeholder ([Business Name], [topic], [Name]) with your own details before publishing or sharing.
3. Save your customized version in one place so you can reuse it next time without starting over.
4. Review the result once in its real context — a listing, a page, or a reply — before moving on.
