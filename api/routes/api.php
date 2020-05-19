<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
        Route::post('logs', 'DateTimeLogController@create');
        Route::get('logs', 'DateTimeLogController@index');
        Route::delete('/api/logs/{id}', 'DateTimeLogController@delete');
});