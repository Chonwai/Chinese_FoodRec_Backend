<?php

namespace App\Utils;

use Bolt\Bolt;

class BoltUtils
{
    public static function makeConnect()
    {
        $bolt = new Bolt($ip = env('NEO4J_HOST', 'localhost'), $port = env('NEO4J_PORT', '7687'), $timeout = 120);
        $bolt->setProtocolVersions(4.1);
        $bolt->init(env('NEO4J_DATABASE', 'Chinese Regional Cuisine Tiny'), env('NEO4J_USERNAME', 'neo4j'), env('NEO4J_PASSWORD', '1234'));
        return $bolt;
    }
}
