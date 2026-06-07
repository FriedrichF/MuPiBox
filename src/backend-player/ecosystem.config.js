module.exports = {
  apps: [
    {
      name: 'spotify-control',
      script: 'spotify-control.js',
      // Restart on crash, up to 10 times within 30 seconds before giving up
      max_restarts: 10,
      min_uptime: '30s',
      restart_delay: 2000,
      // Kill the old process within 5s before forcing restart
      kill_timeout: 5000,
      // Restart on memory leak (Pi3 has 1GB RAM)
      max_memory_restart: '200M',
      // Log to pm2 log directory
      error_file: '/home/dietpi/.pm2/logs/spotify-control-error.log',
      out_file: '/home/dietpi/.pm2/logs/spotify-control-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      // Merge logs so they don't rotate forever
      merge_logs: true,
    },
  ],
}
