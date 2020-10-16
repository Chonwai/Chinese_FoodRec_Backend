<?php

namespace App\Http\Controllers\Apis;

use Illuminate\Http\Request;

interface BaseControllerInterface
{
    public function responseAll();
    public function responseSpecify(Request $request);
    public function insert(Request $request);
    public function update(Request $request);
    public function delete(Request $request);
}
